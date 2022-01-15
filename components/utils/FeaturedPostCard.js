import React from 'react';
import Link from 'next/link'
import moment from 'moment';
import cx from 'classnames'

const FeaturedPostCard = ({ post }) => {

    console.log(post);

    const slug = post["properties"]["Slug"]["rich_text"][0]["plain_text"]
    const featuredImage = post["properties"]["FeaturedImage"].files[0].file.url
    const title = post["properties"]["Name"]["title"][0]["plain_text"]
    const publishedDate = post["properties"]["PublishedDate"]["date"]["start"]
    const tags = post["properties"]["Tags"]["multi_select"]
    const excerpt = post["properties"]["Excerpt"]["rich_text"][0]["plain_text"]

    return (
        <React.Fragment>
            <Link
                href={`/blog/${slug}`}
            >
                <a
                    className="z-40"
                    alt={"Alex Beciana - " + title}
                >
                    <div
                        
                    >
                        <img
                            src={featuredImage}
                            alt={"Alex Beciana - " + title}
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
                            {tags.map((tag) => {
                                return (<span
                                    className={cx("ml-1 my-1 py-0.5 px-1.5 rounded-full text-xs leading-tight", {
                                        ['text-white bg-yellow-700 bg-opacity-60']: tag.color === "brown",
                                        ['text-white bg-orange-400	 bg-opacity-60']: tag.color === 'orange',
                                        ['text-white bg-pink-300']: tag.color === 'pink',
                                        ['text-white bg-purple-300']: tag.color === 'purple',
                                        ['text-black bg-yellow-200']: tag.color === 'yellow',
                                        ['text-white bg-blue-300']: tag.color === 'blue',
                                        ['text-black bg-gray-200']: tag.color === 'gray',
                                        ['text-white bg-green-400']: tag.color === 'green',
                                        ['text-white bg-red-400']: tag.color === 'red',
                                        ['text-white bg-blue-800']: tag.color === 'default'
                                    })}
                                >{tag.name}</span>)
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