import React from 'react'
import Testimonial from '../utils/Testimonial'
import PageMargin from '../utils/PageMargin'

const Reviews = (props) => {

    return (
        <React.Fragment>
            <div id="reviews"></div>
            <PageMargin>
                <section
                    className="homepage-section mt-16 pb-16 flex flex-col justify-items-center item-stretch"
                >
                    <div
                        className="text-5xl font-reross text-yellow leading-relaxed"
                    >
                        reviews
                    </div>
                    <section className="my-32">
                        <Testimonial />
                    </section>
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export default Reviews