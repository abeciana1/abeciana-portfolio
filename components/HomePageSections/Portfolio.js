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
                            </h1>
                            {projData?.projects.map((proj) => {
                                return <PortfolioComp proj={proj} />
                            })}
                    </section>
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export default Portfolio