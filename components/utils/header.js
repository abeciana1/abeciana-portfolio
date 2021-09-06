import React from 'react';
import Head from 'next/head'


const Header = () => {

    return (
        <React.Fragment>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/waving.png" />
                <link rel="stylesheet" href="https://use.typekit.net/bsh6twa.css" />
                {/* <link rel="stylesheet" href="https://use.typekit.net/bsh6twa.css" /> */}
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"/>
            </Head>
        </React.Fragment>
    )
}

export default Header