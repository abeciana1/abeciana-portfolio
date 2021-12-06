import React from 'react';
const { Client } = require("@notionhq/client")

const BlogPost = (props) => {

    console.log(props)

    return (
        <React.Fragment>

        </React.Fragment>
    )
}

export async function getStaticPaths() {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        sorts: [
        {
            property: 'Published Date',
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

    let paths = response.results.map((post) => {
        let Slug = `/blog/${post["properties"]["Slug"]["rich_text"][0]["plain_text"]}`
        return {params: { slugId: Slug.toString()}}
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    
    const blogSlug = context.params.slug;
    console.log(blogSlug)
    // const notion = new Client({ auth: process.env.NOTION_API_KEY });
    // const page = await notion.databases.query({
    //     database_id: process.env.NOTION_DATABASE_ID,
    //     sorts: [
    //     {
    //         property: 'Published Date',
    //         direction: 'ascending',
    //     },
    // ],
    // filter: {
    //     property: 'Slug',
    //     text: {
    //         equals: blogSlug
    //     }
    // }
    // });



    // return {
    //     props: {
    //         page
    //     },
    //     revalidate: 1,
    // };
}

export default BlogPost