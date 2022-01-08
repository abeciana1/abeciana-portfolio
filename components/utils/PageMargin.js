import React from 'react'

const PageMargin = ({ children }) => {

    return (
        <section className="px-5 md:px-10 py-4 mx-auto page-margin">
            {children}
        </section>
    )
}

export default PageMargin