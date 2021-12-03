import React from 'react';
const { Client } = require("@notionhq/client")

import PostCard from '../../components/utils/PostCard'
import Dropdown from '../../components/utils/forms/Dropdown'
import PageMargin from '../../components/utils/PageMargin'

const BlogHome = ({posts}) => {


    return (
        <React.Fragment>
            <PageMargin>
                <section
                    className="py-12 grid grid-cols-3 gap-12"
                >
                    {posts.map((post) => {
                        return <PostCard key={post.id} post={post} /> 
                    })}
                </section>
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
            property: 'Published Date',
            direction: 'ascending',
        },
    ],
    });

    // let sorted = response.results.sort((a, b) => {
    //     new Date() - new Date(a["properties"]["Published Date"]["date"]["start"])
    // })

    return {
        props: {
            posts: response.results,
        },
        revalidate: 1,
    };
}

export default BlogHome