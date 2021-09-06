import React from 'react';
import PageMargin from '../utils/PageMargin'

import { Transition } from '@headlessui/react'

const About = () => {

    return (
        <React.Fragment>
            <PageMargin>
                <section
                    id="about"
                    className="homepage-section mt-16 flex flex-col md:grid md:grid-cols-2 justify-items-center item-stretch"
                >
                        <section
                            className="self-center justify-self-start"
                        >
                            <section>
                            <div
                                className="text-5xl font-reross text-yellow leading-relaxed"
                            >
                                about
                            </div>
                            <div
                                className="text-5xl font-reross leading-relaxed"
                            >
                                Alex Beciana
                            </div>
                            <div
                                className="leading-10 text-lg w-3/4"
                            >
                                Full-stack software engineer with an entrepreneurial spirit with 5 years of digital marketing, product management, and community management experience, working in tech (startup to FAANG), education, and music as well as leading a profitable startup. I'm a recent Flatiron School graduate and accustomed to the Agile methodology, working across technical and non-technical teams, and managing project roadmaps.
                            </div>
                            </section>
                        </section>
                        <section
                            className="self-center justify-self-start"
                        >
                            <Transition
                                show={true}
                                enter="transition-opacity duration-700"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                            <div>
                                <img 
                                    src="/profile-callout.png"
                                    className="transform translate-x-10"
                                />
                            </div>
                            </Transition>
                        </section>
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export default About