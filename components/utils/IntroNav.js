import React, {useState} from 'react'
import Link from 'next/link'

const IntroNav = () => {

    const [ yPosition, setYPosition ] = useState(235)

    const handleMouseEnter = (e) => {
        console.log("mouse enter", e)
        setYPosition(e.target.offsetTop)
    }

    const handleMouseMove = (e) => {
        console.log("mouse move", e)
        // setYPosition(e.clientY)
        setYPosition(e.target.offsetTop)
    }

    const handleMouseLeave = (e) => {
        console.log("mouse leave", e)
        // setYPosition(e.clientY)
        setYPosition(e.target.offsetTop)
    }

    console.log("y", yPosition)

    return (
        <React.Fragment>
            <section
                className="flex self-center justify-items-center item-stretch hidden lg:block"
                onMouseEnter={(e) => handleMouseEnter(e)}
                onMouseMove={(e) => handleMouseMove(e)}
                onMouseLeave={(e) => setYPosition(235)}
            >
                    {/* <section className="nav"> */}
                    <span
                        className="menu-line self-center text-6xl font-reross float-left text-gray-300 pt-2"
                    style={{ "top": `${yPosition}px`}}
                    >/</span>
                    <div className="ml-10">
                        <Link
                            href="/"
                            onHover={(e) => handleMouseEnter(e)}
                        >
                            <a className="anim-text text-6xl leading-tight cursor-pointer font-reross">home</a>
                        </Link>
                        <br/>
                        <Link
                            href="/#about"
                            onHover={(e) => handleMouseEnter(e)}
                        >
                            <a className="anim-text text-6xl leading-tight font-reross">about</a>
                        </Link>
                        <br/>
                        <Link
                        href="/#portfolio"
                        onHover={(e) => handleMouseEnter(e)}
                        >
                            <a className="anim-text text-6xl leading-tight font-reross">portfolio</a>
                    </Link>
                    <br/>
                        <Link
                            href="/#blog"
                            onHover={(e) => handleMouseEnter(e)}
                        >
                            <a className="anim-text text-6xl leading-tight font-reross">blog</a>
                    </Link>
                    <br/>
                        <Link
                            href="/#reviews"
                            onHover={(e) => handleMouseEnter(e)}
                        >
                            <a className="anim-text text-6xl leading-tight font-reross">reviews</a>
                    </Link>
                    <br/>
                        <Link
                            href="/#contact"
                            onHover={(e) => handleMouseEnter(e)}
                        >
                            <a className="anim-text text-6xl leading-tight font-reross">contact</a>
                        </Link>
                    </div>
                    {/* </section> */}
            </section>
        </React.Fragment>
    )
}

export default IntroNav