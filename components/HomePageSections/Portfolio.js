import React from 'react';
import PortfolioComp from '../utils/PortfolioComp'
import PageMargin from '../utils/PageMargin'
// import Link from 'next/link'

const Portfolio = (props) => {

    return (
        <React.Fragment>
            <PageMargin>
                <div
                    id="portfolio"
                    className="pt-5"
                ></div>
                <section
                >
                    <section
                        className="homepage-section mt-16 lg:pb-32 flex flex-col md:grid md:grid-cols-2 justify-items-stretch items-stretch"
                    >
                        <section
                            className=""
                        >
                            <div
                                className="justify-self-start text-5xl font-reross text-altYellow"
                            >
                                portfolio
                                <div
                                    className="text-lg"
                                >
                                    chevrons for switching
                                </div>
                            </div>
                        </section>
                        <section
                            className="col-span-2 self-start lg:pb-56"
                        >
                        <PortfolioComp/>
                        </section>
                    </section>
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export default Portfolio