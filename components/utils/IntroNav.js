import React from 'react'
import Link from 'next/link'

const IntroNav = () => {

    return (
        <React.Fragment>
            <section
                className="self-center hidden lg:block z-50"
            >
                    <h2 className="text-6xl leading-tight">home</h2>
                    <Link
                        href="/#about"
                    >
                        <h2 className="text-6xl leading-tight">about</h2>
                    </Link>
                    <Link
                        href="/#portfolio"
                    >
                        <h2 className="text-6xl leading-tight">portfolio</h2>
                    </Link>
                    <Link
                        href="/#blog"
                    >
                        <h2 className="text-6xl leading-tight">blog</h2>
                    </Link>
                    <Link
                        href="/#reviews"
                    >
                        <h2 className="text-6xl leading-tight">reviews</h2>
                    </Link>
                    <Link
                        href="/#contact"
                    >
                        <h2 className="text-6xl leading-tight">contact</h2>
                    </Link>
            </section>
        </React.Fragment>
    )
}

export default IntroNav