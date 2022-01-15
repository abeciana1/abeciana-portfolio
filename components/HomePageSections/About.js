import React from 'react';
import PageMargin from '../utils/PageMargin'
import { withRouter } from 'next/router'
import cx from 'classnames'

const About = (props) => {

    

    return (
        <React.Fragment>
            <PageMargin>
                <section
                    id="about"
                    className="homepage-section sticky lg:pt-4 flex flex-col md:grid md:grid-cols-2 gap-12 justify-items-center item-stretch"
                >
                        <section
                            className="self-center justify-self-start"
                        >
                        <section className={cx({
                                ['mt-10']: props.router.asPath === '/'
                            })}>
                            <h1
                                className="text-5xl font-reross leading-relaxed"
                            >
                                Hi I'm Alex Beciana
                            </h1>
                            <div
                                className="leading-10 text-lg"
                            >
                                Junior full-stack software engineer with an entrepreneurial spirit with 5 years of digital marketing, product management, and community management experience, working in tech (startup to FAANG), education, and music as well as leading a profitable startup. Accustomed to working across technical and non-technical teams and managing project roadmaps.
                            </div>
                            </section>
                        </section>
                        <section
                            className="self-center justify-self-start"
                        >
                        {props.aboutAnimate ?
                            <>
                            <div className="profile-callout">
                                <img 
                                    src="/profile-callout-edited.png"
                                    className="transform translate-x-10 hidden md:inline"
                                    alt="Alex Beciana (animated)"
                                />
                            </div>
                            </>
                        : null
                        }
                            <div
                                className="pt-5 hidden sm:block"
                            >
                                <h2 className="text-left text-3xl pb-5">Dev dad jokes</h2>
                                <img src="https://readme-jokes.vercel.app/api" alt="Dev Dad Jokes Card" />
                            </div>
                        </section>
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export default withRouter(About)