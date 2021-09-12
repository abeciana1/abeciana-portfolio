import React from 'react';
import Link from 'next/link'

const Portfolio = (props) => {

    return (
        <React.Fragment>
            <section
                id="portfolio"
            >
                <br/>
                <section
                    className="homepage-section mt-16 pb-16 flex flex-col md:grid md:grid-cols-3 justify-items-center item-stretch ml-5 md:ml-10"
                >
                    <section
                        className="self-start justify-self-start col-span-1"
                    >
                            <section>
                                <div
                                    className="text-5xl font-reross text-yellow leading-relaxed"
                                >
                            portfolio
                                </div>
                                chevrons to change between projects
                            </section>
                    </section>
                    {props.portfolioAnimate ?
                    <>
                    <section 
                        className="portfolio-background py-16 self-end col-span-2 flex justify-items-center item-stretch mt-16"
                    >
                        <div
                            className="self-center leading-10 text-lg bg-white relative py-10 px-10 w-7/12 rounded-3xl absolute -left-96 shadow-xl"
                        >
                            <h2 
                                className="text-4xl lowercase"
                            >
                                Project Title
                            </h2>
                            Full-stack software engineer with an entrepreneurial spirit with 5 years of digital marketing, product management, and community management experience, working in tech (startup to FAANG), education, and music as well as leading a profitable startup. I'm a recent Flatiron School graduate and accustomed to the Agile methodology, working across technical and non-technical teams, and managing project roadmaps.
                        </div>
                        <div className="self-center absolute left-1/4">
                            <img
                                src="/amulets.png"
                                className=""
                            />
                        </div>
                    </section>
                    <section className="justify-self-start">
                        <button
                            className="bg-black text-lg text-white font-medium py-2 px-14 rounded-full"
                        >
                            See all
                        </button>
                    </section>
                    </>
                    : null}
                </section>
            </section>
        </React.Fragment>
    )
}

export default Portfolio