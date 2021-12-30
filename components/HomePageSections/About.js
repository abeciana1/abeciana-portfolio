import React, { useState } from 'react';
import PageMargin from '../utils/PageMargin'
import { withRouter } from 'next/router'
import cx from 'classnames'
import Link from 'next/link'

const About = (props) => {

    

    return (
        <React.Fragment>
            <PageMargin>
                <section
                    id="about"
                    className="homepage-section sticky lg:pt-12 flex flex-col md:grid md:grid-cols-2 gap-12 justify-items-center item-stretch"
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
                            {props.router.asPath === "/" ?
                                <section className="mt-5">
                                    <section className="justify-self-start ">
                                        <Link
                                            href="/about"
                                        >
                                            <button
                                                className="bg-altRed hover:bg-black text-lg text-white font-medium py-2 px-10 rounded-full flex content-center"
                                            >
                                                Experience & skills
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </Link>
                                    </section>
                                </section>
                                : null
                            }
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
                                />
                            </div>
                            </>
                        : null
                        }
                            <div
                                className="pt-5 hidden sm:block"
                            >
                                <h2 className="text-left text-3xl pb-5">Dev dad jokes</h2>
                                <img src="https://readme-jokes.vercel.app/api" alt="Jokes Card" />
                            </div>
                        </section>
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export default withRouter(About)