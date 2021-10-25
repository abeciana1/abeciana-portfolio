import '../styles/globals.css'
import '../styles/about-section.css'
import '../styles/portfolio-section.css'
import '../styles/blog-section.css'
import '../styles/reviews.css'

import 'tailwindcss/tailwind.css'

import NavBar from '../components/utils/navbar'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
