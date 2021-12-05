import React, { useState } from 'react';
import PageMargin from '../utils/PageMargin'
import { withRouter } from 'next/router'
import cx from 'classnames'

const About = (props) => {

    console.log(props);

    return (
        <React.Fragment>
            <PageMargin>
                <section
                    id="about"
                    className="homepage-section sticky top-0 flex flex-col md:grid md:grid-cols-2 justify-items-center item-stretch"
                >
                        <section
                            className="self-center justify-self-start"
                        >
                        <section className={cx({
                                ['mt-10']: props.router.asPath === '/'
                            })}>
                            {props.router.asPath === '/' ?    
                                null
                                :
                                <div
                                    className="text-5xl font-reross text-altYellow leading-relaxed"
                                >
                                    about me
                                </div>
                            }
                            <h1
                                className="text-5xl font-reross leading-relaxed"
                            >
                                Hi I'm Alex Beciana
                            </h1>
                            <div
                                className="leading-10 text-lg"
                            >
                                Full-stack software engineer with an entrepreneurial spirit with 5 years of digital marketing, product management, and community management experience, working in tech (startup to FAANG), education, and music as well as leading a profitable startup. I'm a recent Flatiron School graduate and accustomed to the Agile methodology, working across technical and non-technical teams, and managing project roadmaps.
                            </div>
                            <div
                                className="pt-5 hidden lg:block"
                            >
                                <h2 className="text-left text-3xl pb-5">Dev dad jokes</h2>
                                <img src="https://readme-jokes.vercel.app/api" alt="Jokes Card" />
                            </div>
                            </section>
                        </section>
                        <section
                            className="self-center justify-self-start"
                        >
                        {props.aboutAnimate ? 
                            <div className="profile-callout">
                                <img 
                                    src="/profile-callout-edited.png"
                                    className="transform translate-x-10 hidden md:inline"
                                />
                            </div>
                        : null
                        }
                        </section>
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export default withRouter(About)