import '../styles/globals.css'
import '../styles/about-section.css'
import '../styles/portfolio-section.css'
import '../styles/blog-section.css'
import '../styles/reviews.css'
import '../styles/notion.css'

import 'tailwindcss/tailwind.css'

import React, { useState } from 'react'

import Head from 'next/head'
import NavBar from '../components/utils/NavBar'

function MyApp({ Component, pageProps }) {

  const [selectedComp, setSelectedComp] = useState('')

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <NavBar
        selectedComp={selectedComp}
        setSelectedComp={setSelectedComp}
      />
      <Component
        {...pageProps}
        setSelectedComp={setSelectedComp}
        selectedComp={selectedComp}
        />
    </>
  )
}

export default MyApp
