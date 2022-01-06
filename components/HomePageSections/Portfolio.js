import React from 'react';
import PortfolioComp from '../utils/PortfolioComp'
import PageMargin from '../utils/PageMargin'
import Link from 'next/link'

const Portfolio = (props) => {

    const {
        projData
    } = props

    return (
        <React.Fragment>
            <PageMargin>
                <section
                    id="portfolio"
                    className="py-10"
                >
                    <section
                        className="homepage-section mt-10 justify-items-stretch items-stretch"
                    >
                            <h1
                                className="justify-self-start text-5xl font-reross text-altYellow"
                            >
                                portfolio
                                <div
                                    className="text-lg font-futura"
                                >
                                    chevrons for switching
                                </div>
                            </h1>
                        <PortfolioComp/>
                    <section className="mt-10">
                    <section className="justify-self-start">
                        <Link
                            href="/portfolio"
                        >
                            <button
                                className="bg-black text-lg text-white font-medium py-2 px-10 rounded-full flex content-center"
                            >
                                See all
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </button>
                        </Link>
                    </section>
                </section>
                    </section>
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export default Portfolio