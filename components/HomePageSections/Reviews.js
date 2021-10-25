import React from 'react'
import Testimonial from '../utils/Testimonial'
import PageMargin from '../utils/PageMargin'

const Reviews = (props) => {

    return (
        <React.Fragment>
            {/* <div id="reviews"></div> */}
            <PageMargin>
                <section
                    id="reviews"
                    className="homepage-section mt-16 pb-16 flex flex-col justify-items-center item-stretch"
                >
                    <div
                        className="text-5xl font-reross text-yellow leading-relaxed"
                    >
                        reviews
                    </div>
                    <section className="py-16">
                        <Testimonial />
                    </section>
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export default Reviews