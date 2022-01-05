import React from 'react';
import PageMargin from '../utils/PageMargin'
import cx from 'classnames'
import Link from 'next/link'
import SmoothScrollLink from '../utils/SmoothScrollLink'
import Skills from '../../data/skills.json'

const AboutExp = () => {

    console.log(Skills);

    return (
        <React.Fragment>
            <PageMargin>
                <h1
                    className="text-5xl font-reross text-altYellow leading-relaxed"
                >about me</h1>
                <section
                    className="flex text-3xl"
                >
                    <SmoothScrollLink
                        className="mr-5 font-reross cursor-pointer anim-text"
                        activeClass="active"
                        to="recent"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        exact="true"
                        offset={5}
                        linkText="skills"
                    />
                    |
                    <SmoothScrollLink
                        className="ml-5 font-reross cursor-pointer anim-text"
                        activeClass="active"
                        to="all"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        exact="true"
                        offset={-100}
                        linkText="experience"
                    />
                </section>
                <section
                    className="mt-20"
                >
                    <section
                        id="skills"
                        className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-10"
                    >
                        {Skills.map((skill) => {
                            return (
                                <div
                                    className="text-center"
                                >
                                    <img
                                        src={skill.image}
                                        className="w-auto h-12 mx-auto"
                                    />
                                    <div
                                        className="mt-2"
                                    >
                                        {skill.name}
                                    </div>
                                </div>
                            )
                        })}
                    </section>
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export default AboutExp