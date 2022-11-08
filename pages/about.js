import React from 'react';
import PageMargin from '../components/utils/PageMargin'
import Image from 'next/image'

const AboutPage = () => {
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
                        <section>
                            <h1
                                className="text-5xl font-reross leading-relaxed"
                            >
                                Hi I'm Alex Beciana
                            </h1>
                            <div
                                className="leading-10 text-lg"
                            >
                                Full stack software engineer with two years of experience with an entrepreneurial spirit. Previous experience with five  years in digital marketing, product management, and community management, working in tech (startup to FAANG), education, and music as well as leading a profitable startup. Accustomed to working across technical and non-technical teams and managing project roadmaps.
                            </div>
                            </section>
                        </section>
                        <section
                            className="self-center justify-self-start lg:justify-self-end lg:mx-20"
                        >
                            <div className="profile-callout">
                                <Image 
                                    src="/profile-callout-edited.png"
                                    layout="responsive"
                                    width={100}
                                    height={100}
                                    priority
                                    className="desktop-profile transform translate-x-0 hidden md:inline"
                                    alt="Alex Beciana (animated)"
                                />
                            </div>
                            <div
                                className="pt-5 hidden sm:block"
                            >
                                <h2 className="text-left text-3xl pb-5">Dev dad jokes</h2>
                                <img className="mx-auto" src="https://readme-jokes.vercel.app/api" alt="Dev Dad Jokes Card" />
                            </div>
                        </section>
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export default AboutPage