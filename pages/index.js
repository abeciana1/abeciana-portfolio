import React, {useState, useEffect} from 'react';
import Head from 'next/head'

//! import home page sections here
import Intro from '../components/HomePageSections/Intro'
import About from '../components/HomePageSections/About'
import Portfolio from '../components/HomePageSections/Portfolio'
import Blog from '../components/HomePageSections/Blog'
import Reviews from '../components/HomePageSections/Reviews'
import Contact from '../components/HomePageSections/Contact'

const HomePage = () => {

  const [aboutAnimate, setAboutAnimate] = useState(false)

    useEffect(() => {
      setAboutAnimate(true)
    }, []);

  return (
    <React.Fragment>
        <Head>
          <title>Alex Beciana</title>
          <meta name="description" content="Generated by create next app" />
        </Head>
        {/* <Intro /> */}
        <div className="justify-item-center self-center mx-auto z-30 md:hidden">
            <img
                src="/profile-pic.png"
                className="shadow-xl rounded-full w-2/3 md:w-3/5 mx-auto bg-white"
            />
        </div>
        <About aboutAnimate={aboutAnimate} />
        <Portfolio/>
        <Blog />
        <Reviews />
        <Contact />
    </React.Fragment>
  )
}

export default HomePage