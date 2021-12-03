import '../styles/globals.css'
import '../styles/about-section.css'
import '../styles/portfolio-section.css'
import '../styles/blog-section.css'
import '../styles/reviews.css'

import 'tailwindcss/tailwind.css'

import Head from 'next/head'

import HomeNavBar from '../components/utils/HomeNavBar'
import PageNavBar from '../components/utils/PageNavBar'

import { withRouter } from 'next/router'


function MyApp({ Component, pageProps, router }) {

  console.log(router);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      {router.asPath === "/" ? 
        <HomeNavBar />
        :
        <PageNavBar/>
        }
      <Component {...pageProps} />
    </>
  )
}

export default withRouter(MyApp)
