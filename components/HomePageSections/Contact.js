import React from 'react'

import ContactForm from '../utils/forms/ContactForm'

const Contact = (props) => {

    return (
        <React.Fragment>
            <section
                id="contact"
                className="homepage-section mt-16 pb-16 flex flex-col justify-items-center item-stretch ml-5 md:ml-10"
            >
                <div
                    className="text-5xl font-reross text-yellow leading-relaxed"
                >
                    contact
                </div>
                <section
                    className=""
                >
                    <ContactForm />
                </section>
            </section>
        </React.Fragment>
    )
}

export default Contact