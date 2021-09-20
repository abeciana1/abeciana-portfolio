import React from 'react';
import PortfolioComp from '../utils/PortfolioComp'
// import Link from 'next/link'

const Portfolio = (props) => {

    return (
        <React.Fragment>
            <div
                id="portfolio"
                className="pt-5"
            ></div>
            <section
            >
                <section
                    className="homepage-section mt-16 lg:pb-32 flex flex-col md:grid md:grid-cols-2 justify-items-stretch items-stretch ml-5 md:ml-10"
                >
                    <section
                        className=""
                    >
                        <div
                            className="justify-self-start text-5xl font-reross text-yellow"
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
        </React.Fragment>
    )
}

export default Portfolio