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

import { withRouter } from 'next/router'



function MyApp({ Component, pageProps, router }) {

  const [ selectedComp, SetselectedComp ] = useState('')

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <NavBar
        selectedComp={selectedComp}
      />
      <Component
        {...pageProps}
        selectedComp={selectedComp}
        />
    </>
  )
}

export default withRouter(MyApp)
