import React from 'react'
import Link from 'next/link'

const IntroNav = () => {

    return (
        <React.Fragment>
            <section
                className="self-center hidden lg:block"
            >
                    <Link href="/">
                        <a className="anim-text text-6xl leading-tight cursor-pointer font-reross">home</a>
                    </Link>
                    <br/>
                    <Link
                        href="/#about"
                    >
                        <a className="anim-text text-6xl leading-tight font-reross">about</a>
                    </Link>
                    <br/>
                    <Link
                        href="/#portfolio"
                    >
                        <a className="anim-text text-6xl leading-tight font-reross">portfolio</a>
                </Link>
                <br/>
                    <Link
                        href="/#blog"
                    >
                        <a className="anim-text text-6xl leading-tight font-reross">blog</a>
                </Link>
                <br/>
                    <Link
                        href="/#reviews"
                    >
                        <a className="anim-text text-6xl leading-tight font-reross">reviews</a>
                </Link>
                <br/>
                    <Link
                        href="/#contact"
                    >
                        <a className="anim-text text-6xl leading-tight font-reross">contact</a>
                    </Link>
            </section>
        </React.Fragment>
    )
}

export default IntroNav