import React from 'react';
import PageMargin from '../utils/PageMargin'
import cx from 'classnames'
import Link from 'next/link'
import SmoothScrollLink from '../utils/SmoothScrollLink'

const AboutExp = () => {

    return (
        <React.Fragment>
            <PageMargin>
                <h1
                    className="text-5xl font-reross text-altYellow leading-relaxed"
                >blog</h1>
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
                        linkText="recent posts"
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
                        linkText="all posts"
                    />
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export default AboutExp