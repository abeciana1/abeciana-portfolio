import React, {useState, useEffect} from 'react';
import Head from 'next/head'
const { Client } = require("@notionhq/client")

//! import home page sections here
import About from '../components/HomePageSections/About'
import Portfolio from '../components/HomePageSections/Portfolio'
import Blog from '../components/HomePageSections/Blog'
import Reviews from '../components/HomePageSections/Reviews'
import Contact from '../components/HomePageSections/Contact'

// TODO - create mobile rendering of blog section on homepage
// TODO - Reach out to clients for testimonials
// TODO - Add testimonials to graphcms
// TODO - Hook up hubspot for site
// TODO - Add button on about section to go to full page
// TODO - Create about page subnav based on hover
// TODO - Create scroll to top button reuse comp
// TODO - Add resume - available to download
// TODO - render actual blog post
// TODO - Add icons to public profiles
// TODO - Add social share buttons for blog posts
// TODO - Create meta data for pages
// TODO - create SEO title and description for blog posts
// TODO - Add mobile nav menu rendering
// TODO - Optimize all images with next/image comp
// TODO - Review web metrics and optimize

// const renderComp = () => {

// }

const HomePage = (props) => {

  const {
    posts,
    descPosts,
    blogResponse,
    selectedComp
  } = props

  const [aboutAnimate, setAboutAnimate] = useState(false)

    useEffect(() => {
      setAboutAnimate(true)
    }, []);

  return (
    <React.Fragment>
        <Head>
          <title>Alex Beciana</title>
          <meta name="description" content="Generated by create next app" />
        </Head>
        <div className="justify-item-center self-center mx-auto z-30 md:hidden">
            <img
                src="/profile-pic.png"
                className="shadow-xl rounded-full w-2/3 md:w-3/5 mx-auto bg-white"
            />
        </div>
        <About aboutAnimate={aboutAnimate} />
        <Portfolio/>
        <Blog
          posts={posts}
        />
        <Reviews />
        <section
          className="mt-32"
        >
          <Contact />
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

    return {
        props: {
            posts: response.results,
            descPosts: descResponse.results,
            blogResponse: blogResponse.results
        },
        revalidate: 1,
    };
}

export default HomePage