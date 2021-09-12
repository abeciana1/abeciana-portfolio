import React from 'react';
import Link from 'next/link'

const Portfolio = (props) => {

    return (
        <React.Fragment>
            <section
                id="portfolio"
            >
                <section
                    className="homepage-section mt-16 pb-32 flex flex-col md:grid md:grid-cols-3 justify-items-stretch ml-5 md:ml-10"
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
                    <section></section>
                    <section></section>
                </section>
            </section>
        </React.Fragment>
    )
}

export default Portfolio