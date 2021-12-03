import React, {useState} from 'react';
import Link from 'next/link'

// TODO - Add blog post teaser comp on hover covering with meta data
// TODO - Add column for excerpt tex -- use for hover cover ^^


const PostCard = ({ post }) => {

    const [mouseHover, setHover] = useState(true)

    const slug = post["properties"]["Slug"]["rich_text"][0]["plain_text"]
    const featuredImage = post["properties"]["FeaturedImage"].files[0].file.url
    const tags = post["properties"]["Tags"]["multi_select"].map((tag) => {
        tag.name
    })
    const title = post["properties"]["Name"]["title"][0]["plain_text"]
    const publishedDate = post["properties"]["Published Date"]["date"]["start"]

    return (
        <React.Fragment>
            <Link
                href={`/blog/${slug}`}
            >
                <a>
                    <div
                        
                    >
                        {mouseHover ? 
                                <img
                                    src={featuredImage}
                                />
                        : null}
                    </div>
                </a>
            </Link>
        </React.Fragment>
    )
}

export default PostCard