import React, { useState, useEffect } from 'react';
// import Link from 'next/link'
import PageMargin from './PageMargin'
import cx from 'classnames'
import { Link, animateScroll as scroll } from "react-scroll";
// import Hamburger from 'hamburger-react'
import { Squash as Hamburger } from 'hamburger-react'
import { withRouter } from 'next/router'



function HomeNavBar() {

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const [scrolled, setScrolled] = React.useState(false);

    const [isOpen, setOpen] = useState(false);

    let navBarId = '';

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 450) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    if (scrolled) {
        navBarId = 'scrolled';
    }


    return (
        <React.Fragment>
            <section
                id={navBarId}
                className="bg-white z-50">
                <PageMargin>
                    <section
                        className="hidden lg:block flex lg:items-stretch"
                    >
                        <a
                            className="text-3xl sm:text-4xl md:text-3xl font-reross cursor-pointer anim-text"
                            onClick={() => scrollToTop()}
                        >Alex Beciana</a>
                        <section
                            className={cx("self-center float-right flex justify-end", {})}
                        >
                            <Link
                                className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                exact="true"
                                offset={-100}
                            >
                                about
                            </Link>
                            <Link
                                className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                exact="true"
                                offset={-80}
                            >
                                portfolio
                                {/* <a className="text-3xl pl-5 lg:pl-10 hidden lg:block font-reross">portfolio</a> */}
                            </Link>
                            <Link
                                className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                activeClass="active"
                                to="blog"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                exact="true"
                                offset={-80}
                            >
                                blog
                            </Link>
                            <Link
                                className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                activeClass="active"
                                to="reviews"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                exact="true"
                                offset={-80}
                            >
                                reviews
                                {/* <a className="text-3xl pl-5 lg:pl-10 hidden lg:block font-reross">reviews</a> */}
                            </Link>
                            <Link
                                className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                exact="true"
                                offset={-80}
                            >
                                contact
                                {/* <a className="text-3xl pl-5 lg:pl-10 hidden lg:block font-reross">contact</a> */}
                            </Link>
                        </section>
                    </section>
                    <section
                        className="block lg:hidden flex items-center justify-between"
                    >
                        <a
                            className="text-3xl sm:text-4xl md:text-3xl font-reross cursor-pointer anim-text"
                            onClick={() => scrollToTop()}
                        >Alex Beciana</a>
                            <Hamburger
                                toggled={isOpen}
                                toggle={setOpen}
                                rounded
                                color="#292F36"
                                easing="ease-in"
                            />
                    </section>
                    {isOpen && (
                        <section>
                            
                        </section>
                    )}
                </PageMargin>
            </section>
        </React.Fragment>
    );
}

export default HomeNavBar