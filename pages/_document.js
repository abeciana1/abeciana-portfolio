import Document, { Html, Head, Main, NextScript } from 'next/document'

const MyDocument = () => {

    return (
        <Html>
            <Head>
                {/* <title>Alex Beciana</title> */}
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/waving.png" />
                <link rel="stylesheet" href="https://use.typekit.net/bsh6twa.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default MyDocument