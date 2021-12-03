import React from 'react';
import Link from 'next/link'



const PostCard = ({ post }) => {
    
    console.log(post.properties);

    const slug = post["properties"]["Slug"]["rich_text"][0]["plain_text"]
    const featuredImage = post["properties"]["FeaturedImage"].files[0].file.url
    const tags = post["properties"]["Tags"]["multi_select"].map((tag) => {
        tag.name
    })
    const title = post["properties"]["Name"]["title"][0]["plain_text"]
    const publishedDate = post["properties"]["Published Date"]["date"]["start"]

//     "Status": {
//         "id": "%7CnIj",
//         "type": "select",
//         "select": {
//             "id": "6d64b34b-6732-47ac-ac3f-a3b31f111148",
//             "name": "Published",
//             "color": "green"
//         }
//     },
// }


    return (
        <React.Fragment>
            <Link
                href={`/blog${slug}`}
            >
                <a>
                    <div>
                        <img
                            src={featuredImage}
                            className=""
                        />
                    </div>
                </a>
            </Link>
        </React.Fragment>
    )
}

export default PostCard