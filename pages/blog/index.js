import React from 'react';
const { Client } = require("@notionhq/client")

import PostCard from '../../components/utils/PostCard'
import Dropdown from '../../components/utils/forms/Dropdown'
import PageMargin from '../../components/utils/PageMargin'

// TODO - add blog post filtering

const BlogHome = ({posts}) => {


    return (
        <React.Fragment>
            <PageMargin>
                <section
                    className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
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
    filter: {
        property: 'Status',
        select: {
            equals: 'Published'
        }
    }
    });

    return {
        props: {
            posts: response.results,
        },
        revalidate: 1,
    };
}

export default BlogHome