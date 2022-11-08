import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import PageMargin from './PageMargin'
import { Squash as Hamburger } from 'hamburger-react'
import { withRouter } from 'next/router'
import Image from 'next/image'
import PreRenderLink from './PreRenderLink'
// import Link from 'next/link'
// import { animateScroll as scroll } from "react-scroll";


const NavBar = (props) => {

    const {
        router,
    } = props

    const [isOpen, setOpen] = useState(false);

    return (
        <React.Fragment>
            <section
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
                                alt="Alex Beciana"
                                className="text-3xl sm:text-4xl md:text-3xl font-reross cursor-pointer anim-text"
                            >Alex Beciana</a>
                                <div className="flex self-center ml-5">
                                <Link href="https://www.behance.net/alexbeciana">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        alt="Alex Beciana - Behance"
                                    >
                                        <Image
                                            width={25}
                                            height={25}
                                            loading="lazy"
                                            src="/behance-png.png"
                                            alt="Alex Beciana - Behance"
                                        />
                                    </a>
                                </Link>
                                <Link href="https://github.com/abeciana1">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        alt="Alex Beciana - GitHub"
                                    >
                                        <Image
                                            width={25}
                                            height={25}
                                            loading="lazy"
                                            src="/github-png.png"
                                            alt="Alex Beciana - GitHub"
                                        />
                                    </a>
                                </Link>
                                <Link href="https://www.linkedin.com/in/alexbeciana/">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        alt="Alex Beciana - LinkedIn"
                                    >
                                        <Image
                                            width={25}
                                            height={25}
                                            loading="lazy"
                                            src="/linkedin-png.png"
                                            alt="Alex Beciana - LinkedIn"
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
                                        <Image
                                            loading="lazy"
                                            width={25}
                                            height={25}
                                            src="/behance-png.png"
                                            alt="Alex Beciana - Behance"
                                        />
                                    </a>
                                </Link>
                                <Link href="https://github.com/abeciana1">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        alt="Alex Beciana - GitHub"
                                    >
                                        <Image
                                            loading="lazy"
                                            width={25}
                                            height={25}
                                            src="/github-png.png"
                                            alt="Alex Beciana - GitHub"
                                        />
                                    </a>
                                </Link>
                                <Link href="https://www.linkedin.com/in/alexbeciana/">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        alt="Alex Beciana - LinkedIn"
                                    >
                                        <Image
                                            loading="lazy"
                                            width={25}
                                            height={25}
                                            src="/linkedin-png.png"
                                            alt="Alex Beciana - LinkedIn"
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
                            <PreRenderLink
                                className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                linkText="about"
                                href="/about"
                            />
                            <PreRenderLink
                                className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                linkText="portfolio"
                                href="/portfolio"
                            />
                            <PreRenderLink
                                className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                href="/blog"
                                linkText="blog"
                            />
                            <PreRenderLink
                                className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                href="/reviews"
                                linkText="reviews"
                            />
                            <PreRenderLink
                                className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                href="/contact"
                                linkText="contact"
                            />
                        </>
                        :
                        <>
                            <Link
                                href="/about"
                            >
                                <a
                                    alt="Alex Beciana - About Me"
                                    className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                >about</a>
                            </Link>
                            <Link
                                href="/portfolio"
                            >
                                <a
                                    alt="Alex Beciana - Portfolio"
                                    className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                >portfolio</a>
                            </Link>
                            <Link
                                href="/blog"
                            >
                                <a
                                    alt="Alex Beciana - Blog"
                                    className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                >blog</a>
                            </Link>
                            <Link
                                href="/reviews"
                            >
                                <a
                                    alt="Alex Beciana - Reviews"
                                    className="text-3xl hidden lg:block mr-5 font-reross cursor-pointer anim-text"
                                >reviews</a>
                            </Link>
                            <Link
                                href="/contact"
                            >
                                <a
                                    alt="Alex Beciana - Contact"
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
                                    <PreRenderLink
                                        className="text-3xl block lg:hidden mr-5 font-reross cursor-pointer anim-text"
                                        linkText="about"
                                        href="/about"
                                    />
                                    <PreRenderLink
                                        className="text-3xl block lg:hidden mr-5 font-reross cursor-pointer anim-text"
                                        linkText="portfolio"
                                        href="/portfolio"
                                    />
                                    <PreRenderLink
                                        className="text-3xl block lg:hidden mr-5 font-reross cursor-pointer anim-text"
                                        linkText="blog"
                                        href="/blog"
                                    />
                                    <PreRenderLink
                                        className="text-3xl block lg:hidden mr-5 font-reross cursor-pointer anim-text"
                                        linkText="reviews"
                                        href="/reviews"
                                    />
                                    <PreRenderLink
                                        className="text-3xl block lg:hidden mr-5 font-reross cursor-pointer anim-text"
                                        linkText="contact"
                                        href="/contact"
                                    />
                                </>
                                :
                                <>
                                    <Link
                                        href="/about"
                                    >
                                        <a
                                            alt="Alex Beciana - About Me"
                                            className="text-3xl block lg:hidden mr-5 font-reross cursor-pointer anim-text"
                                        >about</a>
                                    </Link>
                                    <Link
                                        href="/portfolio"
                                    >
                                        <a
                                            alt="Alex Beciana - Portfolio"
                                            className="text-3xl block lg:hidden mr-5 font-reross cursor-pointer anim-text"
                                        >portfolio</a>
                                    </Link>
                                    <Link
                                        href="/blog"
                                    >
                                        <a
                                            alt="Alex Beciana - Blog"
                                            className="text-3xl block lg:hidden mr-5 font-reross cursor-pointer anim-text"
                                        >blog</a>
                                    </Link>
                                    <Link
                                        href="/reviews"
                                    >
                                        <a
                                            alt="Alex Beciana - Reviews"
                                            className="text-3xl block lg:hidden mr-5 font-reross cursor-pointer anim-text"
                                        >reviews</a>
                                    </Link>
                                    <Link
                                        href="/contact"
                                    >
                                        <a
                                            alt="Alex Beciana - Contact"
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