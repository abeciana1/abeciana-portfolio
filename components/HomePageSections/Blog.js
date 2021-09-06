import React from 'react';

const Blog = (props) => {

    return (
        <React.Fragment>
            
            <section
                id="blog"
                className="blog-background py-16 -ml-32"
            >
                <section
                    className="homepage-section mt-16 pb-16 flex flex-col md:grid md:grid-cols-3 justify-items-center item-stretch my-4 ml-5 md:ml-10"
                >
                    <section
                        className="self-start justify-self-center col-span-1"
                    >
                            <section>
                                <div
                                    className="text-5xl font-reross text-yellow leading-relaxed"
                                >
                            blog
                                </div>
                            </section>
                    </section>
                </section>
            </section>
        </React.Fragment>
    )
}

export default Blog