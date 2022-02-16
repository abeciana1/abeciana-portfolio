import React, {useState} from 'react';
import Link from 'next/link'
import cx from 'classnames'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import moment from 'moment'


const PostCard = ({ post }) => {

    const [mouseHover, setHover] = useState(false)

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
                <Transition
                    show={true}
                    enter="transition ease-in-out duration-1000 transform"
                    leave="transition ease-in-out duration-1000 transform"
                >
                    <a
                        className="z-40"
                        onMouseEnter={() => setHover(!mouseHover)}
                        onMouseLeave={() => setHover(!mouseHover)}
                        alt={"Alex Beciana - " + title}
                    >
                            <div
                                
                            >
                            <Image
                                src={featuredImage}
                                layout="responsive"
                                loading="lazy"
                                width={200}
                                height={100}
                                alt={"Alex Beciana - " + title}
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
                                    {title + " — " + moment(new Date(publishedDate)).add(1, 'days').format("MMM Do YY")}
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
                        </Transition>
                    </a>
                </Transition>
            </Link>
        </React.Fragment>
    )
}

export default PostCard