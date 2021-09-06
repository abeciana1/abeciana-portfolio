import React from 'react';
import PageMargin from '../utils/PageMargin'

const About = () => {

    return (
        <React.Fragment>
            <PageMargin>
                <section
                    id="about"
                    className="mt-16 flex flex-col md:grid md:grid-cols-3 justify-items-center item-stretch"
                >
                        <section
                            className="self-center justify-self-start"
                        >
                            <section>
                            <div
                                className="text-5xl font-reross text-yellow"
                            >
                                about
                            </div>
                            <br />
                            <div
                                className="text-5xl font-reross"
                            >
                                Alex Beciana
                            </div>
                            </section>
                        </section>
                        <section>
                            <div>
                                picture
                            </div>
                        </section>
                        <section>
                            <div>
                                picture
                            </div>
                        </section>
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export default About