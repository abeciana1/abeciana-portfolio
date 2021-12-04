import React, {useState} from 'react';
import Link from 'next/link'
import cx from 'classnames'
import { Transition } from '@headlessui/react'

// TODO - Add blog post teaser comp on hover covering with meta data
// TODO - Add column for excerpt tex -- use for hover cover ^^


const PostCard = ({ post }) => {

    const [mouseHover, setHover] = useState(false)

    const slug = post["properties"]["Slug"]["rich_text"][0]["plain_text"]
    const featuredImage = post["properties"]["FeaturedImage"].files[0].file.url
    const tags = post["properties"]["Tags"]["multi_select"].map((tag) => {
        tag.name
    })
    const title = post["properties"]["Name"]["title"][0]["plain_text"]
    const publishedDate = post["properties"]["Published Date"]["date"]["start"]

    console.log(post["properties"]["Tags"]["multi_select"]);
    return (
        <React.Fragment>
            <Link
                href={`/blog/${slug}`}
            >
                <a
                    onMouseEnter={() => setHover(!mouseHover)}
                    onMouseLeave={() => setHover(!mouseHover)}
                >
                    {mouseHover ? 
                        <div>
                            <img
                                src={featuredImage}
                            />
                        </div>
                    : 
                        <div
                            className="w-full border border-2 border-black"
                        >
                            <div
                                className="font-medium text-lg px-2"
                            >
                                {title}
                            </div>
                            <div
                                className="flex flex-wrap px-1"
                            >
                                {post["properties"]["Tags"]["multi_select"].map((tag) => {
                                    return <span
                                        className={cx("ml-1 my-1 py-0.5 px-1.5 rounded-full text-sm leading-tight", {
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
                            </div>
                        </div>
                    }
                </a>
            </Link>
        </React.Fragment>
    )
}

export default PostCard