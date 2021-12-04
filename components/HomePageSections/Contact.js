import React from 'react'
import PageMargin from '../utils/PageMargin'


import ContactForm from '../utils/forms/ContactForm'

const Contact = (props) => {

    return (
        <React.Fragment>
            <PageMargin>
                <section
                    id="contact"
                    className="homepage-section mt-16 pb-16 flex flex-col justify-items-center item-stretch"
                >
                    <div
                        className="text-5xl font-reross text-altYellow leading-relaxed"
                    >
                        contact
                    </div>
                    <section>
                        <ContactForm />
                    </section>
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export default Contact