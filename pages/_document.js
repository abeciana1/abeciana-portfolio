import Document, { Html, Head, Main, NextScript } from 'next/document'

const MyDocument = () => {

    return (
        <Html>
            <Head>
                <meta name="description" content="Junior full-stack software engineer with an entrepreneurial spirit with 5 years of digital marketing, product management, and community management experience, working in tech (startup to FAANG), education, and music as well as leading a profitable startup. Accustomed to working across technical and non-technical teams and managing project roadmaps." />
                <link rel="icon preload" href="/waving.png" />
                <link rel="stylesheet preload" as="font" href="https://use.typekit.net/bsh6twa.css" crossOrigin="anonymous" />
                {/* <link rel="preconnect preload" as="font" href="https://fonts.googleapis.com" crossOrigin="anonymous" /> */}
                {/* <link rel="preconnect preload" as="font" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> */}
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" as="font" rel="stylesheet preload" crossOrigin="anonymous" />
                <script type="text/javascript" id="hs-script-loader" async src="//js.hs-scripts.com/21235958.js"></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default MyDocument