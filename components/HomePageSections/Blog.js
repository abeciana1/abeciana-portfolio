import React from 'react';
import PostCard from '../utils/PostCard'
import Link from 'next/link'

const Blog = ({posts}) => {

    return (
        <React.Fragment>
            <section
                id="blog"
                className="homepage-section blog-background mt-16 pb-16 z-40 hidden lg:block"
                >
                    <h1
                        className="text-5xl pt-4 font-reross flex flex-col text-altYellow leading-relaxed ml-5 md:ml-10"
                    >
                    recent blog posts
                    </h1>
                    <section
                        className="grid lg:grid-cols-3 justify-items-center item-stretch z-50 gap-12 my-12 mx-5 md:mx-10"
                    >
                        {posts.slice(1,7).map((post) => {
                            return <PostCard key={post.id} post={post} />
                        })}
                    </section>
                <section className="mt-10">
                    <section className="justify-self-start ml-5 md:ml-10">
                        <Link
                            href="/blog"
                        >
                            <button
                                className="bg-black text-lg text-white font-medium py-2 px-10 rounded-full flex content-center"
                            >
                                See more
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </button>
                        </Link>
                    </section>
                </section>
            </section>
        </React.Fragment>
    )
}

export default Blog