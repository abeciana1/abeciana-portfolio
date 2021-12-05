import React, { useState, useEffect } from 'react'
import About from '../components/HomePageSections/About'

const AboutPage = () => {

    const [aboutAnimate, setAboutAnimate] = useState(false)

    useEffect(() => {
        setAboutAnimate(true)
    }, []);

    return (
        <React.Fragment>
            <About aboutAnimate={aboutAnimate} />
        </React.Fragment>
    )
}

export default AboutPage