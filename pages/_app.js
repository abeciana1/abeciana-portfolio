import '../styles/globals.css'
import '../styles/about-section.css'
import '../styles/portfolio-section.css'
import '../styles/blog-section.css'

import 'tailwindcss/tailwind.css'
import Header from '../components/utils/header'
import NavBar from '../components/utils/navbar'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <NavBar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
