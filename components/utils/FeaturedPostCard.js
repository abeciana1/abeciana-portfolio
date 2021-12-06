import React from 'react';
import Link from 'next/link'
import moment from 'moment';
import cx from 'classnames'

const FeaturedPostCard = ({ post }) => {
    
    console.log(post);

    const slug = post["properties"]["Slug"]["rich_text"][0]["plain_text"]
    const featuredImage = post["properties"]["FeaturedImage"].files[0].file.url
    const tags = post["properties"]["Tags"]["multi_select"].map((tag) => {
        tag.name
    })
    const title = post["properties"]["Name"]["title"][0]["plain_text"]
    const publishedDate = post["properties"]["Published Date"]["date"]["start"]

    const excerpt = post["properties"]["Excerpt"]["rich_text"][0]["plain_text"]

    return (
        <React.Fragment>
            <Link
                href={`/blog/${slug}`}
            >
                <a
                    className="z-40"
                >
                    <div
                        
                    >
                        <img
                            src={featuredImage}
                        />
                    </div>
                    <div
                        className="w-full bg-white z-30 rounded-bl-lg rounded-br-lg shadow-xl"
                    >
                        <div
                            className="font-medium text-lg px-2 flex flex-wrap"
                        >
                            {title + " — " + moment(new Date(publishedDate)).format("MMM Do YY")}
                        </div>
                        <div
                            className="flex flex-wrap px-1"
                        >
                            {post["properties"]["Tags"]["multi_select"].map((tag) => {
                                return <span
                                    className={cx("ml-1 my-1 py-0.5 px-1.5 rounded-full text-xs leading-tight", {
                                        ['bg-yellow-700 text-white bg-opacity-60']: tag.color === "brown",
                                        ['bg-yellow-500	text-white bg-opacity-60']: tag.color === 'orange',
                                        ['bg-pink-300 text-white']: tag.color === 'pink',
                                        ['bg-purple-300	text-white']: tag.color === 'purple',
                                        ['bg-yellow-200']: tag.color === 'yellow',
                                        ['bg-blue-300 text-white']: tag.color === 'blue',
                                        ['bg-gray-200']: tag.color === 'gray',
                                        ['bg-green-400 text-white']: tag.color === 'green',
                                        ['bg-red-400 text-white']: tag.color === 'red',
                                        ['bg-blue-800 text-white']: tag.color === 'default'
                                    })}
                                >{tag.name}</span>
                            })}
                            <div
                                className="p-2"
                            >
                                {excerpt}
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </React.Fragment>
    )
}

export default FeaturedPostCard