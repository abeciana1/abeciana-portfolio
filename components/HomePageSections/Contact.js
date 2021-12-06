import React from 'react'
import PageMargin from '../utils/PageMargin'


import ContactForm from '../utils/forms/ContactForm'

const Contact = (props) => {

    return (
        <React.Fragment>
            <PageMargin>
                <section
                    id="contact"
                    className="homepage-section pb-16 flex flex-col justify-items-center item-stretch"
                >
                    <h2
                        className="text-5xl font-reross text-altYellow leading-relaxed"
                    >
                        contact
                    </h2>
                    <section
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 content-center mt-10"
                    >
                        <ContactForm />
                            <div
                                className="text-center"
                            >
                                <img 
                                    src="/profile-callout-edited.png"
                                    className="hidden md:inline"
                                />
                            </div>
                        {/* <section>
                        </section> */}
                    </section>
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export default Contact