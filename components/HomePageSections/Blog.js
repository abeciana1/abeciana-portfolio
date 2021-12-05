import React from 'react';
import PostCard from '../utils/PostCard'
import Link from 'next/link'
import PageMargin from '../utils/PageMargin'

const Blog = ({posts}) => {

    return (
        <React.Fragment>
            <section
                id="blog"
                className="homepage-section blog-background mt-16 pb-16 z-40 hidden lg:block"
                >
                    <img
                        src="/blog-circle.svg"
                        className="blog-background w-4/12 mt-32"
                    />
                    <div
                        className="absolute text-5xl pt-4 font-reross flex flex-col text-altYellow leading-relaxed ml-5 md:ml-10 top-5"
                    >
                    blog
                    </div>
                    <section
                        className="absolute md:grid md:grid-cols-3 justify-items-center item-stretch z-50 top-32 gap-12 mx-5 md:mx-10"
                    >
                            <section
                                className="self-center justify-self-start z-50"
                            >
                                <PostCard key={posts[0].id} post={posts[0]} />
                            </section>
                            <section className="self-center justify-self-end z-50">
                                <PostCard key={posts[1].id} post={posts[1]} />
                                {/* <div
                                    className="pt-12"
                                >
                                    <PostCard key={posts[2].id} post={posts[2]} />
                                </div> */}
                            </section>
                            <section className="self-center justify-self-end z-50">
                                <PostCard key={posts[2].id} post={posts[2]} />
                                {/* <div
                                    className="pt-12"
                                >
                                    <PostCard key={posts[4].id} post={posts[4]} />
                                </div> */}
                            </section>
                        </section>
                <section className="mt-10">
                    <section className="absolute justify-self-start ml-5 md:ml-10 -mt-32">
                        <Link
                            href="/blog"
                        >
                            <button
                                className="bg-black text-lg text-white font-medium py-2 px-14 rounded-full"
                            >
                                See more
                            </button>
                        </Link>
                    </section>
                </section>
            </section>
        </React.Fragment>
    )
}

export default Blog