import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import PageMargin from './PageMargin'
import cx from 'classnames'

import { Squash as Hamburger } from 'hamburger-react'
import { withRouter } from 'next/router'

const PageNavBar = () => {

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
                        <Link
                            href="/"
                        >
                            <a
                                className="text-3xl sm:text-4xl md:text-3xl font-reross cursor-pointer anim-text"
                            >Alex Beciana</a>
                        </Link>
                        <section
                            className={cx("self-center float-right flex justify-end", {})}
                        >
                            <Link
                                href="/about"
                            >
                                <a
                                    className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                >about</a>
                            </Link>
                            <Link
                                href="/portfolio"
                            >
                                <a
                                    className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                >portfolio</a>
                            </Link>
                            <Link
                                href="/blog"
                            >
                                <a
                                    className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                >blog</a>
                            </Link>
                            <Link
                                href="/reviews"
                            >
                                <a
                                    className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                >reviews</a>
                            </Link>
                            <Link
                                href="/contact"
                            >
                                <a
                                    className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                >contact</a>
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
    )
}

export default PageNavBar