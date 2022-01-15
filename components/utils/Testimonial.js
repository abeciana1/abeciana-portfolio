import React from 'react';
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

const Testimonial = (props) => {

    const {
        review
    } = props

    return (
        <React.Fragment>
            <div key={review.id} className="text-center">
                <h3
                    className="text-3xl"
                >
                    {review.callOut}
                </h3>
            </div>
            <section
                className="text-center"
            >
                <div
                    className="flex justify-center p-5 rounded-lg shadow-xl mx-auto lg:w-3/4"
                >
                    <div
                        className="bg-white testimonial-rec leading-10 text-base z-30 overflow-auto overscroll-contain"
                    >
                        <ReactMarkdown
                            children={review?.testimonialBody}
                            components={{
                                p({ children, props }) {
                                    return (
                                        <p
                                            className="text-left"
                                            {...props}
                                        >
                                            {children}
                                        </p>
                                    )
                                }
                            }}
                        />
                    </div>
                </div>
            </section>
                <div
                    className="pt-10 flex justify-center mx-auto lg:mx-0 block items-stretch"
                    style={{
                        width: '100%',
                    }}
                >
                    <div
                        className="rounded-full p-3 bg-altYellow w-44"
                    >
                        <Image
                            src={review?.reviewerPic?.url}
                            layout="responsive"
                            alt={review.reviewerName}
                            height={150}
                            width={150}
                            className="rounded-full testimonial-pic"
                        />
                    </div>
                    <div
                        className="self-center pl-10"
                    >
                        <div
                            className="font-semiBold text-lg"
                        >
                            {review.reviewerName}
                        </div>
                        <div
                            className="font-medium"
                        >
                            {review.reviewerPosition}
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Testimonial