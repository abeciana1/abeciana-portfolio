import React from 'react'
import Testimonial from '../utils/Testimonial'
import PageMargin from '../utils/PageMargin'

const Reviews = () => {

    return (
        <React.Fragment>
            <PageMargin>
                <section
                    id="reviews"
                    className="homepage-section pb-16 flex flex-col justify-items-center item-stretch"
                >
                    <h1
                        className="text-5xl font-reross text-altYellow leading-relaxed"
                    >
                        reviews
                    </h1>
                    <section className="py-5">
                        <Testimonial />
                    </section>
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export default Reviews