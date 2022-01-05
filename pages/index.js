import React, {useState, useEffect} from 'react';
const { Client } = require("@notionhq/client")
import { gql, GraphQLClient } from 'graphql-request'

//! import home page sections here
import About from '../components/HomePageSections/About'
import AboutExp from '../components/HomePageSections/AboutExp'
import Portfolio from '../components/HomePageSections/Portfolio'
import Blog from '../components/HomePageSections/Blog'
import Reviews from '../components/HomePageSections/Reviews'
import Contact from '../components/HomePageSections/Contact'

// TODO - create mobile rendering of blog section on homepage
// TODO - Reach out to clients for testimonials
// TODO - Add testimonials to graphcms
// TODO - Hook up hubspot for site
// TODO - Create scroll to top button reuse comp
// TODO - Add resume - available to download
// TODO - Add icons to public profiles
// TODO - Add social share buttons for blog posts
// TODO - Create meta data for pages
// TODO - create SEO title and description for blog posts
// TODO - Add mobile nav menu rendering
// TODO - Optimize all images with next/image comp
// TODO - Review web metrics and optimize

const HomePage = (props) => {

  
  const {
    posts,
    descPosts,
    blogResponse,
    selectedComp,
    setSelectedComp,
    jobData
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
          <Portfolio />
        </section>
      )
    case "reviews":
      return (
        <section className="slide-in-bottom">
          <Reviews />
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
          />
        </section>
      )
    default:
      return null
  }
}

  return (
    <React.Fragment>
        <div className="justify-item-center self-center mx-auto z-30 md:hidden">
            <img
                src="/profile-pic.png"
                className="shadow-xl rounded-full w-2/3 md:w-3/5 mx-auto bg-white"
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
      jobs {
        id
        position
        startDate
        companyName
        companyWebsite
        companyLogo {
          url
        }
        endDate
        responsibilities
      }
    }`
  
  const jobData = await expClient.request(expQuery)
  
  
    return {
        props: {
            posts: response.results,
            descPosts: descResponse.results,
            blogResponse: blogResponse.results,
            jobData: jobData
        },
        revalidate: 1,
    };
}

// export const getServerSideProps = async (context) => {



//   return {
//     props: {
//       jobData
//     }
//   }

// }

export default HomePage