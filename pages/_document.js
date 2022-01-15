import Document, { Html, Head, Main, NextScript } from 'next/document'

const MyDocument = () => {

    return (
        <Html>
            <Head>
                <meta name="description" content="Junior full-stack software engineer with an entrepreneurial spirit with 5 years of digital marketing, product management, and community management experience, working in tech (startup to FAANG), education, and music as well as leading a profitable startup. Accustomed to working across technical and non-technical teams and managing project roadmaps." />
                <link rel="icon preload" as="image" href="/waving.png" />
                <link rel="preload" as="image" href="/profile-callout-edited.png" />
                <link rel="preload" as="image" href="/profile-pic.png" />
                <link rel="preload stylesheet" as="font" href="./RerossQuadratic.otf" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" as="font" rel="stylesheet preload" crossOrigin="anonymous" />
                <script type="text/javascript" id="hs-script-loader" defer src="//js.hs-scripts.com/21235958.js"></script>
                <script type="text/javascript">
                    (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "a78c5ntos1");
                </script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default MyDocument