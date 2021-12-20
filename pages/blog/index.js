import React, { useState } from 'react';
const { Client } = require("@notionhq/client")
import { Link, animateScroll as scroll } from "react-scroll";
import FeaturedPostCard from '../../components/utils/FeaturedPostCard'
import PostCard from '../../components/utils/PostCard'
// import Dropdown from '../../components/utils/forms/Dropdown'
import PageMargin from '../../components/utils/PageMargin'

// TODO - add blog post filtering

const BlogHome = ({ posts, descPosts }) => {

    return (
        <React.Fragment>
            <PageMargin>
                <h1
                    className="text-5xl font-reross text-altYellow leading-relaxed"
                >blog</h1>
                <section
                    className="flex text-3xl"
                >
                    <Link
                        className="mr-5 font-reross cursor-pointer anim-text"
                        activeClass="active"
                        to="recent"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        exact="true"
                        offset={5}
                    >
                        recent posts
                    </Link>
                    |
                    <Link
                        className="ml-5 font-reross cursor-pointer anim-text"
                        activeClass="active"
                        to="all"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        exact="true"
                        offset={-100}
                    >
                        all posts
                    </Link>
                    {/* <Dropdown
                        className="w-1/2"
                        defaultVal={blogType ? 'Recent posts' : 'All posts'}
                        options={postType}
                        onChange={(e) => selectHandler(e)}
                    /> */}
                </section>
                    <>
                        <h2
                            id="recent"
                            className="text-4xl font-reross text-altYellow leading-relaxed"
                        >recent posts</h2>
                        <section
                            className="py-12 md:mx-16 lg:mx-44"
                        >
                            <FeaturedPostCard key={descPosts[0].id} post={descPosts[0]} />
                        </section>
                        <section
                            className="pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                        >
                            {descPosts.slice(1, 4).map((post) => {
                                return <FeaturedPostCard key={post.id} post={post} />
                            })}
                        </section>
                    </>
                <>
                    <h2
                        id="all"
                        className="text-4xl font-reross text-altYellow leading-relaxed"
                    >all posts</h2>
                    <section
                        className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                    >
                        {posts.map((post) => {
                            return <PostCard key={post.id} post={post} /> 
                        })}
                    </section>
                </>
            </PageMargin>
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

export default BlogHome