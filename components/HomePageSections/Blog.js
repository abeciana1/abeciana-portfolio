import React from 'react';

const Blog = (props) => {

    return (
        <React.Fragment>
            {props.blogAnimate ? 
            <section  className="homepage-section blog-background mt-16 pb-16 my-4">
                    <div
                    id="blog"
                        className="text-5xl pt-1 font-reross flex flex-col text-yellow leading-relaxed ml-5 md:ml-10"
                    >
                        blog
                    </div>
                <section
                    className="md:grid md:grid-cols-3 justify-items-center item-stretch z-50"
                >
                    <section
                        className="self-center justify-self-start z-50"
                    >
                        <img
                            src="/amulets.png"
                            className="mx-auto w-5/6 self-center"
                        />
                        {/* <section> */}
                            
                            {/* </section> */}
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
                                className="mx-auto w-5/6"
                            />
                        </div>
                    </section>
                    </section>
                    <section className="justify-self-start ml-5 md:ml-10">
                        <button
                            className="bg-black text-lg text-white font-medium py-2 px-14 rounded-full"
                        >
                            See all
                        </button>
                    </section>
                </section>
                : null}
        </React.Fragment>
    )
}

export default Blog