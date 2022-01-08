import React, {useState} from 'react';
import Link from 'next/link'
import cx from 'classnames'
import { Transition } from '@headlessui/react'

import moment from 'moment'


const PostCard = ({ post }) => {

    const [mouseHover, setHover] = useState(false)

    const slug = post["properties"]["Slug"]["rich_text"][0]["plain_text"]
    const featuredImage = post["properties"]["FeaturedImage"].files[0].file.url
    const title = post["properties"]["Name"]["title"][0]["plain_text"]
    const publishedDate = post["properties"]["PublishedDate"]["date"]["start"]

    const excerpt = post["properties"]["Excerpt"]["rich_text"][0]["plain_text"]

    return (
        <React.Fragment>
            <Link
                href={`/blog/${slug}`}
            >
                <Transition
                    show={true}
                    enter="transition ease-in-out duration-1000 transform"
                    leave="transition ease-in-out duration-1000 transform"
                >
                    <a
                        className="z-40"
                        onMouseEnter={() => setHover(!mouseHover)}
                        onMouseLeave={() => setHover(!mouseHover)}
                    >
                            <div
                                
                            >
                                <img
                                    src={featuredImage}
                                />
                            </div>
                        <Transition
                            show={mouseHover}
                            enter="transition ease-in-out duration-700 transform"
                            enterFrom="-translate-y-0 opacity-0"
                            enterTo="translate-y-0 opacity-100"
                            leave="transition ease-in-out duration-700 transform"
                            leaveFrom="translate-y-0 opacity-100"
                            leaveTo="-translate-y-0 opacity-0"
                        >
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
                                            className={cx("ml-1 my-1 py-0.5 px-1.5 rounded-full text-xs text-black leading-tight", {
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
                        </Transition>
                    </a>
                </Transition>
            </Link>
        </React.Fragment>
    )
}

export default PostCard