import React from 'react';

const BlogPost = () => {

    console.log(getAllPosts())

    return (
        <React.Fragment>

        </React.Fragment>
    )
}

export async function getAllPosts() {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
    });

    return {
        posts: response.results
    }

    // return {
    //     props: {
    //         posts: response.results,
    //     },
    //     revalidate: 1,
    // };
}

export default BlogPost