import React, {useState, useEffect} from 'react';
const { Client } = require("@notionhq/client")
import { gql, GraphQLClient } from 'graphql-request'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import PageMargin from '../components/utils/PageMargin'

// const AboutExp = dynamic(() => import('../components/HomePageSections/AboutExp'), {
//   ssr: false
// })

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
// import About from '../components/HomePageSections/About'

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
    default:
      return null
  }
}

  return (
    <React.Fragment>
      <Head>
        <title>Alex Beciana</title>
      </Head>
      <div className="justify-item-center self-center mx-auto z-30 block md:hidden w-2/3 drop-shadow-xl">
        <Image 
          src="/profile-pic.png"
          layout="responsive"
          width={100}
          height={100}
          priority
          className="profile-pic-simple"
          alt="Alex Beciana"
        />
        </div>
            <PageMargin>
                <section
                    id="about"
                    className="homepage-section sticky lg:pt-4 flex flex-col md:grid md:grid-cols-2 gap-12 justify-items-center item-stretch"
                >
                        <section
                            className="self-center justify-self-start"
                        >
                        <section>
                            <h1
                                className="text-5xl font-reross leading-relaxed"
                            >
                                Hi I'm Alex Beciana
                            </h1>
                            <div
                                className="leading-10 text-lg"
                            >
                                Full stack software engineer with two years of experience with an entrepreneurial spirit. Previous experience with five  years in digital marketing, product management, and community management, working in tech (startup to FAANG), education, and music as well as leading a profitable startup. Accustomed to working across technical and non-technical teams and managing project roadmaps.
                            </div>
                            </section>
                        </section>
                        <section
                            className="self-center justify-self-start lg:justify-self-end lg:mx-20"
                        >
                            <div className="profile-callout">
                                <Image 
                                    src="/profile-callout-edited.png"
                                    layout="responsive"
                                    width={100}
                                    height={100}
                                    priority
                                    className="desktop-profile transform translate-x-0 hidden md:inline"
                                    alt="Alex Beciana (animated)"
                                />
                            </div>
                            <div
                                className="pt-5 hidden sm:block"
                            >
                                <h2 className="text-left text-3xl pb-5">Dev dad jokes</h2>
                                <img className="mx-auto" src="https://readme-jokes.vercel.app/api" alt="Dev Dad Jokes Card" />
                            </div>
                        </section>
                </section>
            </PageMargin>
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
            projData: projData,
            reviewData: reviewData
        },
        revalidate: 1,
    };
}

export default HomePage