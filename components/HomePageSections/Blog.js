import React from 'react';
import PostListing from '../utils/PostListing'

const Blog = (props) => {

    return (
        <React.Fragment>
            {/* <section
                id="blog"
            >
            </section> */}
                {/* {props.blogAnimate && ( */}
            <section
                id="blog"
                className="homepage-section blog-background mt-16 pb-16 my-4 z-40 hidden lg:block"
                >
                    <img
                        src="/blog-circle.svg"
                        className="blog-background w-4/12 mt-32"
                    />
                    <div
                        className="absolute text-5xl pt-4 font-reross flex flex-col text-yellow leading-relaxed ml-5 md:ml-10 top-5"
                    >
                        blog
                    </div>
                <section
                    className="absolute md:grid md:grid-cols-3 justify-items-center item-stretch z-50 top-16"
                >
                    <PostListing/>
                        <section
                            className="self-center justify-self-start z-50"
                        >
                            <img
                                src="/amulets.png"
                                className="mx-auto w-5/6 self-center object-center"
                            />
                        </section>
                        <section className="self-center justify-self-end z-50">
                            <div className="">
                                <img
                                    src="/amulets.png"
                                    className="mx-auto w-5/6"
                                />
                                </div>
                                <div className="pt-16">
                                <img
                                    src="/amulets.png"
                                    className="mx-auto w-5/6"
                                />
                            </div>
                        </section>
                        <section className="self-center justify-self-end z-50">
                            <div className="">
                                <img
                                    src="/amulets.png"
                                    className="mx-auto w-5/6"
                                />
                                </div>
                                <div className="pt-16">
                                <img
                                    src="/amulets.png"
                                    className="mx-auto w-5/6 object-center"
                                />
                            </div>
                        </section>
                    </section>
            <section className="mt-10">
                <section className="absolute justify-self-start ml-5 md:ml-10 -mt-32">
                    <button
                        className="bg-black text-lg text-white font-medium py-2 px-14 rounded-full"
                    >
                        See all
                    </button>
                </section>
            </section>
            </section>
            {/* )} */}
        </React.Fragment>
    )
}

export default Blog