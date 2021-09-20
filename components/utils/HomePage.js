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
  const [portfolioAnimate, setPortfolioAnimate] = useState(false)
  const [blogAnimate, setBlogAnimate] = useState(false)

      const handleAboutScroll = () => {
        const offset = window.scrollY;
        if (offset > 550) {
            setAboutAnimate(true)
        } else {
            setAboutAnimate(false)
        }
      };
  
      const handlePortfolioScroll = () => {
        const offset = window.scrollY;
        if (offset > 900 && window.innerWidth > 768) {
            setPortfolioAnimate(true)
        } else {
            setPortfolioAnimate(false)
        }
      }
  
      const handleBlogScroll = () => {
        const offset = window.scrollY;
        if (offset > 1590 && window.innerWidth > 768) {
            setBlogAnimate(true)
        } else {
            setBlogAnimate(false)
        }
      }

    useEffect(() => {
      // console.log(window)
      if (window.innerWidth > 768) {
        window.addEventListener('scroll', handleAboutScroll);
        window.addEventListener('scroll', handlePortfolioScroll);
        window.addEventListener('scroll', handleBlogScroll);
      }
    });

  console.log(blogAnimate)
  return (
    <React.Fragment>
        <Head>
          <title>Alex Beciana</title>
          <meta name="description" content="Generated by create next app" />
        </Head>
        <Intro />
        <About aboutAnimate={aboutAnimate} />
        <Portfolio portfolioAnimate={portfolioAnimate} />
        <Blog blogAnimate={blogAnimate} />
        <Reviews />
        <Contact />
    </React.Fragment>
  )
}

export default HomePage