import React from 'react';
import Head from 'next/head'


const Header = () => {

    return (
        <React.Fragment>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/waving.png" />
                <link rel="stylesheet" href="https://use.typekit.net/bsh6twa.css"/>
            </Head>
        </React.Fragment>
    )
}

export default Header