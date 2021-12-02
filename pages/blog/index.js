import React from 'react';
const { Client } = require("@notionhq/client")

import PostCard from '../../components/utils/PostCard'
import Dropdown from '../../components/utils/forms/Dropdown'

const BlogHome = ({posts}) => {


    return (
        <React.Fragment>
            <section>
                {posts.map((post) => {
                    return <PostCard key={post.id} post={post} /> 
                })}
            </section>
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