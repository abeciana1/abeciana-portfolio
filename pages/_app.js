import '../styles/globals.css'
import '../styles/about-section.css'
import '../styles/portfolio-section.css'
import '../styles/blog-section.css'
import '../styles/reviews.css'

import 'tailwindcss/tailwind.css'

import Head from 'next/head'

import NavBar from '../components/utils/navbar'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <NavBar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
