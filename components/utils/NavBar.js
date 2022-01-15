import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import PageMargin from './PageMargin'
import { Squash as Hamburger } from 'hamburger-react'
import { withRouter } from 'next/router'

import SmoothScrollLink from './SmoothScrollLink'
import { animateScroll as scroll } from "react-scroll";


const NavBar = (props) => {

    const {
        router,
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
                                    alt="Alex Beciana - Homepage"
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
                                offset={-100}
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
                                    alt="Alex Beciana - Homepage About section"
                                    onClick={() => setSelectedComp("about")}
                                    className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                >about</a>
                            </Link>
                            <Link
                                href="/#renderedSection"
                            >
                                <a
                                    alt="Alex Beciana - Homepage Portfolio section"
                                    onClick={() => setSelectedComp("portfolio")}
                                    className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                >portfolio</a>
                            </Link>
                            <Link
                                href="/#renderedSection"
                            >
                                <a
                                    alt="Alex Beciana - Homepage Blog section"
                                    onClick={() => setSelectedComp("blog")}
                                    className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                >blog</a>
                            </Link>
                            <Link
                                href="/#renderedSection"
                            >
                                <a
                                    alt="Alex Beciana - Homepage Reviews section"
                                    onClick={() => setSelectedComp("reviews")}
                                    className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                >reviews</a>
                            </Link>
                            <Link
                                href="/#renderedSection"
                            >
                                <a
                                    alt="Alex Beciana - Homepage Contact section"
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
                            alt="Alex Beciana - Homepage"
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
                </PageMargin>
                    {isOpen && (
                        <section
                            className="bg-white z-50 absolute w-full h-screen"
                        >
                            <section
                                className="px-5 md:px-10 py-4"
                            >
                                <section
                                    className="ml-6 flex flex-col gap-y-8"
                                >
                                {router.asPath === '/' ?
                                <>
                                    <SmoothScrollLink
                                        className="text-3xl block lg:hidden mr-5 font-reross cursor-pointer anim-text"
                                        activeClass="active"
                                        to="renderedSection"
                                        spy={true}
                                        smooth={true}
                                        duration={1000}
                                        exact="true"
                                        linkText="about"
                                        offset={-100}
                                        setSelectedComp={setSelectedComp}
                                        isOpen={isOpen}
                                        setOpen={setOpen}
                                    />
                                    <SmoothScrollLink
                                        className="text-3xl block lg:hidden mr-5 font-reross cursor-pointer anim-text"
                                        activeClass="active"
                                        to="renderedSection"
                                        spy={true}
                                        smooth={true}
                                        duration={1000}
                                        exact="true"
                                        offset={-100}
                                        linkText="portfolio"
                                        setSelectedComp={setSelectedComp}
                                        isOpen={isOpen}
                                        setOpen={setOpen}
                                    />
                                    <SmoothScrollLink
                                        className="text-3xl block lg:hidden mr-5 font-reross cursor-pointer anim-text"
                                        activeClass="active"
                                        to="renderedSection"
                                        spy={true}
                                        smooth={true}
                                        duration={1000}
                                        exact="true"
                                        offset={-100}
                                        linkText="blog"
                                        setSelectedComp={setSelectedComp}
                                        isOpen={isOpen}
                                        setOpen={setOpen}
                                    />
                                    <SmoothScrollLink
                                        className="text-3xl block lg:hidden mr-5 font-reross cursor-pointer anim-text"
                                        activeClass="active"
                                        to="renderedSection"
                                        spy={true}
                                        smooth={true}
                                        duration={1000}
                                        exact="true"
                                        offset={-100}
                                        linkText="reviews"
                                        setSelectedComp={setSelectedComp}
                                        isOpen={isOpen}
                                        setOpen={setOpen}
                                    />
                                    <SmoothScrollLink
                                        className="text-3xl block lg:hidden mr-5 font-reross cursor-pointer anim-text"
                                        activeClass="active"
                                        to="renderedSection"
                                        spy={true}
                                        smooth={true}
                                        duration={1000}
                                        exact="true"
                                        offset={-100}
                                        linkText="contact"
                                        setSelectedComp={setSelectedComp}
                                        isOpen={isOpen}
                                        setOpen={setOpen}
                                    />
                                </>
                                :
                                <>
                                    <Link
                                        href="/#renderedSection"
                                    >
                                        <a
                                            alt="Alex Beciana - Homepage About section"
                                            onClick={() => {
                                                setSelectedComp("about")
                                                if (isOpen) {
                                                    setOpen(false)
                                                }
                                            }}
                                            className="text-3xl block lg:hidden mr-5 font-reross cursor-pointer anim-text"
                                        >about</a>
                                    </Link>
                                    <Link
                                        href="/#renderedSection"
                                    >
                                        <a
                                            alt="Alex Beciana - Homepage Portfolio section"
                                            onClick={() => {
                                                setSelectedComp("portfolio")
                                                if (isOpen) {
                                                    setOpen(false)
                                                }
                                            }}
                                            className="text-3xl block lg:hidden mr-5 font-reross cursor-pointer anim-text"
                                        >portfolio</a>
                                    </Link>
                                    <Link
                                        href="/#renderedSection"
                                    >
                                        <a
                                            alt="Alex Beciana - Homepage Blog section"
                                            onClick={() => {
                                                    setSelectedComp("blog")
                                                    if (isOpen) {
                                                        setOpen(false)
                                                    }
                                                }}
                                            className="text-3xl block lg:hidden mr-5 font-reross cursor-pointer anim-text"
                                        >blog</a>
                                    </Link>
                                    <Link
                                        href="/#renderedSection"
                                    >
                                        <a
                                            alt="Alex Beciana - Homepage Reviews section"
                                            onClick={() => {
                                                    setSelectedComp("reviews")
                                                    if (isOpen) {
                                                        setOpen(false)
                                                    }
                                                }}
                                            className="text-3xl block lg:hidden mr-5 font-reross cursor-pointer anim-text"
                                        >reviews</a>
                                    </Link>
                                    <Link
                                        href="/#renderedSection"
                                    >
                                        <a
                                            alt="Alex Beciana - Homepage Contact section"
                                            onClick={() => {
                                                    setSelectedComp("contact")
                                                    if (isOpen) {
                                                        setOpen(false)
                                                    }
                                                }}
                                            className="text-3xl block lg:hidden mr-5 font-reross cursor-pointer anim-text"
                                        >contact</a>
                                    </Link>
                                </>
                                }
                                </section>
                            </section>
                        </section>
                    )}
            </section>
        </React.Fragment>
    )
}

export default withRouter(NavBar)