import React from 'react';

const Blog = (props) => {

    console.log(props)

    return (
        <React.Fragment>
            <section
                id="blog"
            >
            </section>
                {props.blogAnimate && (
            <section
                id="blog"
                className="homepage-section blog-background mt-16 pb-16 my-4 z-40"
            >
                    <div
                    
                        className="text-5xl pt-4 font-reross flex flex-col text-yellow leading-relaxed ml-5 md:ml-10"
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
            </section>
            )}
            <section className="mt-10">
                <section className="absolute justify-self-start ml-5 md:ml-10 -mt-32">
                    <button
                        className="bg-black text-lg text-white font-medium py-2 px-14 rounded-full"
                    >
                        See all
                    </button>
                </section>
            </section>
            {/* <section id="blog" className="homepage-section blog-background mt-16 pb-16 my-4">
                {props.blogAnimate ?
                    <>
                    <div
                    
                        className="text-5xl pt-4 font-reross flex flex-col text-yellow leading-relaxed ml-5 md:ml-10"
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
                        </>
                : null}
                </section> */}
        </React.Fragment>
    )
}

export default Blog

// const Blog = (props) => {

//     return (
//         <React.Fragment>
//             <section
//                 id="blog"
//                 classname="homepage-section mt-16 text-center"
//             >
//                 <section
//                     classname="flex flex-row justify-content-center w-full"
//                 >
//                     <section
//                         classname="blog-section screen"
//                     >
//                         <section
//                             classname="overlap-group2"
//                         >
//                             <section
//                                 classname="overlap-group1"
//                             >
//                                 <img
//                                     src="/blog-circle.svg"
//                                     classname="blog-circle w-1/2"
//                                 />
//                                 <div

//                                     className="title text-5xl font-reross text-yellow leading-relaxed ml-5 md:ml-10"
//                                 >
//                                     blog
//                                 </div>
//                             </section>
//                         </section>
//                     </section>
//                 </section>
//             </section>
//         </React.Fragment>
//     )
// }

// export default Blog

