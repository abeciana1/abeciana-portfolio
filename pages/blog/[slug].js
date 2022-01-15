import React from 'react';
// const { Client } = require("@notionhq/client")
// import Head from 'next/head'
import { withRouter } from 'next/router'
import { NotionRenderer } from "react-notion";
import { NextSeo } from 'next-seo';


import PageMargin from '../../components/utils/PageMargin'

const BlogPost = ({ post, blocks }) => {

    const {
        id,
        Tags,
        Slug,
        Excerpt,
        FeaturedImage,
        Status,
        PublishedDate,
        Name
    } = post

    return (
        <React.Fragment>
            <NextSeo
                title={"Alex Beciana | " + Name}
                description={Excerpt}
                canonical={"https://alexbeciana.com/blog/" + Slug}
                article={{
                    tags: Tags
                }}
                openGraph={{
                    url: "https://alexbeciana.com/blog/" + Slug,
                    title: "Alex Beciana | " + Name,
                    description: Excerpt,
                    images: [
                        {
                            url: FeaturedImage[0]?.rawUrl
                        },
                        {
                            url: FeaturedImage[0]?.url
                        }
                    ],
                    site_name: "Alex Beciana"
                }}
            />
            <PageMargin>
                <section
                    className="py-10 leading-8"
                >
                    <section>
                        <h1
                            className="text-4xl lg:text-5xl py-5"
                        >{Name}</h1>
                        <p
                            className="py-2 italic"
                        >
                            {Excerpt}
                        </p>
                    </section>
                    <section
                        className="py-4 break-words"
                    >
                        <NotionRenderer
                            blockMap={blocks}
                        />
                    </section>
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export async function getStaticPaths() {

    let paths = []

    const posts = await fetch(
        `https://notion-api.splitbee.io/v1/table/${process.env.NOTION_DATABASE_ID}`
    ).then((res) => res.json());

    posts.forEach((post) => {
        paths.push({
            params: {
                slug: post.Slug
            }
        })
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {

    const posts = await fetch(
        `https://notion-api.splitbee.io/v1/table/${process.env.NOTION_DATABASE_ID}`
    ).then((res) => res.json());

    const post = posts.find((t) => t.Slug === context.params.slug);

    const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`).then((res) => res.json());

    return {
        props: {
            post,
            blocks
        }
    }
}

export default withRouter(BlogPost)