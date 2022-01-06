import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import PageMargin from './PageMargin'
import cx from 'classnames'
import { Squash as Hamburger } from 'hamburger-react'
import { withRouter } from 'next/router'

import SmoothScrollLink from './SmoothScrollLink'
import { animateScroll as scroll } from "react-scroll";


const NavBar = (props) => {

    const {
        router,
        selectedComp,
        setSelectedComp
    } = props

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
                        {router.asPath === '/' ?
                        <div
                            className="flex justify-center self-center float-left items-stretch"
                            >
                            <a
                                className="text-3xl sm:text-4xl md:text-3xl font-reross cursor-pointer anim-text"
                                onClick={() => scrollToTop()}
                            >Alex Beciana</a>
                                <div className="flex self-center ml-5">
                                <Link href="https://www.behance.net/alexbeciana">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        alt="Alex Beciana - Behance"
                                    >
                                        <img
                                            src="./behance.svg"
                                        />
                                    </a>
                                </Link>
                                <Link href="https://github.com/abeciana1">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        alt="Alex Beciana - GitHub"
                                    >
                                        <img
                                            src="./github.svg"
                                        />
                                    </a>
                                </Link>
                                <Link href="https://www.linkedin.com/in/alexbeciana/">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        alt="Alex Beciana - LinkedIn"
                                    >
                                        <img
                                            src="./linkedin.svg"
                                        />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        :
                        <div
                            className="flex justify-center self-center float-left items-stretch"
                            >
                            <Link
                                href="/"
                            >
                                <a
                                    className="text-3xl sm:text-4xl md:text-3xl font-reross cursor-pointer anim-text"
                                >Alex Beciana</a>
                            </Link>
                                <div className="flex self-center ml-5">
                                <Link href="https://www.behance.net/alexbeciana">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        alt="Alex Beciana - Behance"
                                    >
                                        <img
                                            src="./behance.svg"
                                        />
                                    </a>
                                </Link>
                                <Link href="https://github.com/abeciana1">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        alt="Alex Beciana - GitHub"
                                    >
                                        <img
                                            src="./github.svg"
                                        />
                                    </a>
                                </Link>
                                <Link href="https://www.linkedin.com/in/alexbeciana/">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        alt="Alex Beciana - LinkedIn"
                                    >
                                        <img
                                            src="./linkedin.svg"
                                        />
                                    </a>
                                </Link>
                            </div>
                            </div>
                        }
                        <section
                            className="self-center ml-60 flex justify-end"
                            // className="self-center flex"
                        >
                        {router.asPath === '/' ?
                        <>
                            <SmoothScrollLink
                                className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                activeClass="active"
                                to="renderedSection"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                exact="true"
                                linkText="about"
                                offset={-100}
                                setSelectedComp={setSelectedComp}
                            />
                            <SmoothScrollLink
                                className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                activeClass="active"
                                to="renderedSection"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                exact="true"
                                // offset={-120}
                                linkText="portfolio"
                                setSelectedComp={setSelectedComp}
                            />
                            <SmoothScrollLink
                                className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                activeClass="active"
                                to="renderedSection"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                exact="true"
                                offset={-100}
                                linkText="blog"
                                setSelectedComp={setSelectedComp}
                            />
                            <SmoothScrollLink
                                className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                activeClass="active"
                                to="renderedSection"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                exact="true"
                                offset={-100}
                                linkText="reviews"
                                setSelectedComp={setSelectedComp}
                            />
                            <SmoothScrollLink
                                className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                activeClass="active"
                                to="renderedSection"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                exact="true"
                                offset={-100}
                                linkText="contact"
                                setSelectedComp={setSelectedComp}
                            />
                        </>
                        :
                        <>
                            <Link
                                href="/#renderedSection"
                            >
                                <a
                                    onClick={() => setSelectedComp("about")}
                                    className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                >about</a>
                            </Link>
                            <Link
                                href="/#renderedSection"
                            >
                                <a
                                    onClick={() => setSelectedComp("portfolio")}
                                    className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                >portfolio</a>
                            </Link>
                            <Link
                                href="/#renderedSection"
                            >
                                <a
                                    onClick={() => setSelectedComp("blog")}
                                    className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                >blog</a>
                            </Link>
                            <Link
                                href="/#renderedSection"
                            >
                                <a
                                    onClick={() => setSelectedComp("reviews")}
                                    className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                >reviews</a>
                            </Link>
                            <Link
                                href="/#renderedSection"
                            >
                                <a
                                    onClick={() => setSelectedComp("contact")}
                                    className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                >contact</a>
                            </Link>
                        </>
                        }
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
    )
}

export default withRouter(NavBar)