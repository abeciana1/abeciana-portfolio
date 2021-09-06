import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import PageMargin from './PageMargin'
import cx from 'classnames'

const NavBar = () => {

    const [scrolled, setScrolled] = React.useState(false);

//   const [mobileNavLinks, setMobileNavLinks] = React.useState(false);

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
                    className="flex lg:items-stretch md:justify-between"
                >
                    <Link href="/#intro">
                        <a className="text-3xl sm:text-4xl md:text-3xl font-reross">Alex Beciana</a>
                    </Link>
                    <section
                        className={cx("self-center float-right flex justify-end", {
                            
                        })}
                    >
                        <Link
                            href="/#about"
                        >
                            <a className="text-3xl hidden lg:block font-reross">about</a>
                        </Link>
                        <Link
                            href="/#portfolio"
                        >
                            <a className="text-3xl pl-5 lg:pl-10 hidden lg:block font-reross">portfolio</a>
                        </Link>
                        <Link
                            href="/#blog"
                        >
                            <a className="text-3xl pl-5 lg:pl-10 hidden lg:block font-reross">blog</a>
                        </Link>
                        <Link
                            href="/#reviews"
                        >
                            <a className="text-3xl pl-5 lg:pl-10 hidden lg:block font-reross">reviews</a>
                        </Link>
                        <Link
                            href="/#contact"
                        >
                            <a className="text-3xl pl-5 lg:pl-10 hidden lg:block font-reross">contact</a>
                        </Link>
                    </section>
                </section>
                </PageMargin>
            </section>
        </React.Fragment>
    )
}

export default NavBar