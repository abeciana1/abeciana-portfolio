import React from 'react';
const { Client } = require("@notionhq/client")

const BlogHome = ({posts}) => {

    console.log(posts)

    return (
        <React.Fragment>
            
        </React.Fragment>
    )
}

export async function getStaticProps() {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
    });

    return {
        props: {
            posts: response.results,
        },
        revalidate: 1,
    };
}

export default BlogHome