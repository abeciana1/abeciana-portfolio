import React, {useState, useEffect} from 'react';
import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

//! import home page sections here
import Intro from '../HomePageSections/Intro'
import About from '../HomePageSections/About'
import Portfolio from '../HomePageSections/Portfolio'
import Blog from '../HomePageSections/Blog'
import Reviews from '../HomePageSections/Reviews'
import Contact from '../HomePageSections/Contact'

const HomePage = () => {

  const [aboutAnimate, setAboutAnimate] = useState(false)

      const handleAboutScroll = () => {
        const offset = window.scrollY;
        if (offset > 1) {
            setAboutAnimate(true)
        } else {
            setAboutAnimate(false)
        }
      };

    useEffect(() => {
      if (window.innerWidth > 768) {
        window.addEventListener('scroll', handleAboutScroll);
      }
    });

  return (
    <React.Fragment>
        {/* <Intro /> */}
        <About aboutAnimate={aboutAnimate} />
        <Portfolio/>
        <Blog />
        <Reviews />
        <Contact />
    </React.Fragment>
  )
}

export default HomePage