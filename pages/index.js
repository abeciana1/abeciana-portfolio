import React, {useState, useEffect} from 'react';
const { Client } = require("@notionhq/client")
import { gql, GraphQLClient } from 'graphql-request'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const AboutExp = dynamic(() => import('../components/HomePageSections/AboutExp'), {
  ssr: false
})

const Portfolio = dynamic(() => import('../components/HomePageSections/Portfolio'), {
  ssr: false
})

const Blog = dynamic(() => import('../components/HomePageSections/Blog'), {
  ssr: false
})

const Reviews = dynamic(() => import('../components/HomePageSections/Reviews'), {
  ssr: false
})

const Contact = dynamic(() => import('../components/HomePageSections/Contact'), {
  ssr: false
})

//! import home page sections here
import About from '../components/HomePageSections/About'

// TODO - Create scroll to top button reuse comp
// TODO - Add resume - available to download
// TODO - Add social share buttons for blog posts
// TODO - create SEO title and description for blog posts
// TODO - Optimize all images with next/image comp
// TODO - Review web metrics and optimize
// TODO Add Google analytics
// TODO check out next js web core vitals fixes
// TODO Add metice script to head
// TODO Add changes from diagnostics on web dev

const HomePage = (props) => {

  
  const {
    posts,
    descPosts,
    selectedComp,
    setSelectedComp,
    jobData,
    projData,
    reviewData
  } = props
  
  const [aboutAnimate, setAboutAnimate] = useState(false)

    useEffect(() => {
      setAboutAnimate(true)
    }, []);
  
  const renderComp = (renderComponent) => {

  switch (renderComponent) {
    case "blog":
      return (
        <section className="slide-in-bottom">
          <Blog
            posts={posts}
            descPosts={descPosts}
          />
        </section>
      );
    case "portfolio":
      return (
        <section className="slide-in-bottom">
          <Portfolio
            projData={projData}
          />
        </section>
      )
    case "reviews":
      return (
        <section className="slide-in-bottom">
          <Reviews
            reviewData={reviewData}
          />
        </section>
      )
    case "contact":
      return (
        <section className="slide-in-bottom">
          <Contact />
        </section>
      )
    case "about":
      return (
        <section className="slide-in-bottom">
          <AboutExp
            jobData={jobData}
            setSelectedComp={setSelectedComp}
          />
        </section>
      )
    default:
      return null
  }
}

  return (
    <React.Fragment>
      <Head>
        <title>Alex Beciana</title>
      </Head>
        <div className="justify-item-center self-center mx-auto z-30 md:hidden">
            <img
                src="/profile-pic.png"
                className="shadow-xl rounded-full w-2/3 md:w-3/5 mx-auto bg-white"
                alt="Alex Beciana (simple animated)"
            />
        </div>
      <About aboutAnimate={aboutAnimate} />
      <section
        id="renderedSection"
        className="mt-10"
      >
          {renderComp(selectedComp)}
      </section>
    </React.Fragment>
  )
}

export async function getStaticProps() {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        sorts: [
        {
            property: 'PublishedDate',
            direction: 'ascending',
        },
    ],
    filter: {
        property: 'Status',
        select: {
            equals: 'Published'
        }
    }
    });

    const descResponse = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        sorts: [
        {
            property: 'PublishedDate',
            direction: 'descending',
        },
    ],
    filter: {
        property: 'Status',
        select: {
            equals: 'Published'
        }
    }
    });

    let blogSlug = 'responsive-search-react'

    const blogResponse = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        sorts: [
        {
            property: 'PublishedDate',
            direction: 'ascending',
        },
    ],
    filter: {
        property: 'Slug',
        text: {
            contains: blogSlug
        }
    }
    });

  const expClient = new GraphQLClient(process.env.GRAPH_CMS_API_ENDPOINT)
  
  const expQuery = gql`
    query {
      jobs(orderBy: endDate_DESC) {
        id
        position
        startDate
        companyName
        companyWebsite
        companyDescription
        companyLogo {
          url
        }
        endDate
        responsibilities
      }
      educations {
        id
        schoolName
        schoolWebsite
        schoolImage {
          url
        }
        achievements
      }
    }`
  
  const jobData = await expClient.request(expQuery)
  
  const projClient = new GraphQLClient(process.env.GRAPH_CMS_API_ENDPOINT)

  const projQuery = gql`
  query {
    projects {
        id
        projectStatus
        projectLinks
        projectTitle
        projectDescription
        projectImage {
          url
        }
        technology
      }
    }
  `
  const projData = await projClient.request(projQuery)

  const reviewClient = new GraphQLClient(process.env.GRAPH_CMS_API_ENDPOINT)
  
  const reviewQuery = gql`
  query {
  testimonials {
    id
    testimonialBody
    reviewerPosition
    reviewerName
    reviewerPic {
      url
    }
    callOut
  }
}
  `
  
  const reviewData = await reviewClient.request(reviewQuery)
  
    return {
        props: {
            posts: response.results,
            descPosts: descResponse.results,
            blogResponse: blogResponse.results,
            jobData: jobData,
            projData: projData,
            reviewData: reviewData
        },
        revalidate: 1,
    };
}

export default HomePage