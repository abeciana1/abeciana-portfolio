import React from 'react';
import Link from 'next/link'
import PageMargin from './PageMargin'
import cx from 'classnames'

const NavBar = () => {

    return (
        <React.Fragment>
            <PageMargin>

            <section
                className="flex lg:items-stretch md:justify-between"
            >
                <Link href="/#intro">
                    <a className="text-3xl sm:text-4xl md:text-3xl font-reross">Alex Beciana</a>
                </Link>
                <section
                    className="self-center float-right flex justify-end"
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
        </React.Fragment>
    )
}

export default NavBar