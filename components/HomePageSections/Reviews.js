import React from 'react'
import Testimonial from '../utils/Testimonial'
import PageMargin from '../utils/PageMargin'

const Reviews = (props) => {

    return (
        <React.Fragment>
            <PageMargin>
                <section
                    id="reviews"
                    className="homepage-section mt-16 pb-16 flex flex-col justify-items-center item-stretch"
                >
                    <h2
                        className="text-5xl font-reross text-altYellow leading-relaxed"
                    >
                        reviews
                    </h2>
                    <section className="py-16">
                        <Testimonial />
                    </section>
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export default Reviews