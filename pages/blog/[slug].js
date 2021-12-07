import React from 'react';
// const { Client } = require("@notionhq/client")
import Head from 'next/head'
import { withRouter } from 'next/router'
import { NotionRenderer, BlockMapType } from "react-notion";

import PageMargin from '../../components/utils/PageMargin'

const BlogPost = ({ post, blocks }) => {

    // console.log(props.router.asPath)

    console.log(post);

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
            <Head>
                <title>Alex Beciana | {post.Name}</title>
            </Head>
            <PageMargin>
                <h1>{post.Name}</h1>
                <NotionRenderer
                    blockMap={blocks}
                />
            </PageMargin>
        </React.Fragment>
    )
}

export async function getStaticPaths() {
    // const notion = new Client({ auth: process.env.NOTION_API_KEY });
    // const response = await notion.databases.query({
    //     database_id: process.env.NOTION_DATABASE_ID,
    //     sorts: [
    //     {
    //         property: 'Published Date',
    //         direction: 'ascending',
    //     },
    // ],
    // filter: {
    //     property: 'Status',
    //     select: {
    //         equals: 'Published'
    //     }
    // }
    // });

    
    // response.results.forEach((post) => {
        //     let Slug = `/blog/${post["properties"]["Slug"]["rich_text"][0]["plain_text"]}`
        //     paths.push({
            //         params: {
                //             slug: Slug,
                //         }
                //     })
                // })
                
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

    // console.log("CONTEXT", context);

    const post = posts.find((t) => t.Slug === context.params.slug);
    // const post = posts.find((t) => console.log(t));

    const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`).then((res) => res.json());

    return {
        props: {
            post,
            blocks
        }
    }
}

export default withRouter(BlogPost)

// {
//     "object": "page",
//     "id": "e77fed55-b25d-43db-a6ac-ce53adbd7e2a",
//     "created_time": "2021-11-25T19:04:00.000Z",
//     "last_edited_time": "2021-12-04T05:25:00.000Z",
//     "cover": null,
//     "icon": null,
//     "parent": {
//         "type": "database_id",
//         "database_id": "d56c1995-ced8-4dcd-8292-f1ce4e5c1703"
//     },
//     "archived": false,
//     "properties": {
//         "Tags": {
//             "id": "3342",
//             "type": "multi_select",
//             "multi_select": [
//                 {
//                     "id": "a159cfed-084f-44c9-b190-fc3e066404a7",
//                     "name": "ReactJS",
//                     "color": "brown"
//                 },
//                 {
//                     "id": "cce2a3f0-69a3-477b-a0f3-d38e57a525aa",
//                     "name": "API",
//                     "color": "gray"
//                 },
//                 {
//                     "id": "578ef450-967b-4c19-ac9f-049bc4fbbae9",
//                     "name": "RESTful",
//                     "color": "yellow"
//                 }
//             ]
//         },
//         "Slug": {
//             "id": "2lD%2B",
//             "type": "rich_text",
//             "rich_text": [
//                 {
//                     "type": "text",
//                     "text": {
//                         "content": "responsive-search-react",
//                         "link": null
//                     },
//                     "annotations": {
//                         "bold": false,
//                         "italic": false,
//                         "strikethrough": false,
//                         "underline": false,
//                         "code": false,
//                         "color": "default"
//                     },
//                     "plain_text": "responsive-search-react",
//                     "href": null
//                 }
//             ]
//         },
//         "Excerpt": {
//             "id": "%3Bp4.",
//             "type": "rich_text",
//             "rich_text": [
//                 {
//                     "type": "text",
//                     "text": {
//                         "content": "I'm going to do another one-off blog post on a subject that I've seen people ask...how to create a responsive search bar in React.",
//                         "link": null
//                     },
//                     "annotations": {
//                         "bold": false,
//                         "italic": false,
//                         "strikethrough": false,
//                         "underline": false,
//                         "code": false,
//                         "color": "default"
//                     },
//                     "plain_text": "I'm going to do another one-off blog post on a subject that I've seen people ask...how to create a responsive search bar in React.",
//                     "href": null
//                 }
//             ]
//         },
//         "FeaturedImage": {
//             "id": "MB%7DR",
//             "type": "files",
//             "files": [
//                 {
//                     "name": "responsive-search-react.png",
//                     "type": "file",
//                     "file": {
//                         "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4709da65-a5e3-4e60-bb75-7242cd91aeb2/responsive-search-react.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211206T225456Z&X-Amz-Expires=3600&X-Amz-Signature=ba4d874aa1397451cb34b8e28d46a6a6156ac92b7dca495ec9abbd92ddad5bbc&X-Amz-SignedHeaders=host&x-id=GetObject",
//                         "expiry_time": "2021-12-06T23:54:56.500Z"
//                     }
//                 }
//             ]
//         },
//         "Status": {
//             "id": "%7CnIj",
//             "type": "select",
//             "select": {
//                 "id": "6d64b34b-6732-47ac-ac3f-a3b31f111148",
//                 "name": "Published",
//                 "color": "green"
//             }
//         },
//         "Published Date": {
//             "id": "%7Ds%7Bw",
//             "type": "date",
//             "date": {
//                 "start": "2021-04-25",
//                 "end": null
//             }
//         },
//         "Name": {
//             "id": "title",
//             "type": "title",
//             "title": [
//                 {
//                     "type": "text",
//                     "text": {
//                         "content": "Creating a Responsive Search in React",
//                         "link": null
//                     },
//                     "annotations": {
//                         "bold": false,
//                         "italic": false,
//                         "strikethrough": false,
//                         "underline": false,
//                         "code": false,
//                         "color": "default"
//                     },
//                     "plain_text": "Creating a Responsive Search in React",
//                     "href": null
//                 }
//             ]
//         }
//     },
//     "url": "https://www.notion.so/Creating-a-Responsive-Search-in-React-e77fed55b25d43dba6acce53adbd7e2a"
// }