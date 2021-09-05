import React from 'react';
import Link from 'next/link'

const NavBar = () => {

    return (
        <React.Fragment>
            <section
                className="flex item-stretch justify-between"
            >
                <h2 className="text-3xl">Alex Beciana</h2>
                <section
                    className="self-center float-right flex justify-end"
                >
                    <Link
                        href="/#about"
                    >
                        <h2 className="text-3xl">about</h2>
                    </Link>
                    <Link
                        href="/#portfolio"
                    >
                        <h2 className="text-3xl pl-10">portfolio</h2>
                    </Link>
                    <Link
                        href="/#blog"
                    >
                        <h2 className="text-3xl pl-10">blog</h2>
                    </Link>
                    <Link
                        href="/#reviews"
                    >
                        <h2 className="text-3xl pl-10">reviews</h2>
                    </Link>
                    <Link
                        href="/#contact"
                    >
                        <h2 className="text-3xl pl-10">contact</h2>
                    </Link>
                </section>
            </section>
        </React.Fragment>
    )
}

export default NavBar