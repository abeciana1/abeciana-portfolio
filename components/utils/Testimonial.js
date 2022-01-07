import React from 'react';
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

const Testimonial = (props) => {

    const {
        review
    } = props

    console.log(review)

// {
//     "id": "ckvvqt2g0b9wc0c85h8q6sl7e",
//     "testimonialBody": "I’ve been a Lead Instructor at Flatiron School for close to 3 years and have graduated over 1500 students. I don’t often write recommendations but I do when I notice something special. There are 3 things I look for in a student to gauge their likelihood to be highly successful engineers: resiliency, ability to receive feedback, and impact on others. Alex exhibits all three.\n\nThere was a moment where I’ve had to give constructive feedback to Alex about his code and performance on a code challenge. Most students in this situation respond with resentment or denial. Alex, on the other hand, gracefully accepted the feedback. He spoke with me about how he could improve and what suggestions I had. Not only did Alex execute on this feedback, improving in every area, he became one of the strongest students I’ve ever had. In fact, he’s the first student of mine to build his own Ruby gem to help initialize new CLI projects, eliminating a prominent pain point for his classmates. Additionally, Alex would offer his time to help his fellow classmates who were struggling with understanding and implementing concepts. The ability to acknowledge areas of opportunities and the resiliency to turn them into strengths are integral to success in any career but particularly significant for a Software Engineer.\n\nAlex has proven that he is self motivated and committed to learning and growing as a developer. I firmly believe he will be a valuable addition to any team. ",
//     "reviewerPosition": "Sr. Manager, Software Engineering Instruction",
//     "reviewerName": "Tashawn Williams",
//     "reviewerPic": {
//         "url": "https://media.graphcms.com/uhDSkFNjScGBu30rKGde"
//     },
//     "callOut": "...valuable addition to any team."
// }

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
                        // className="bg-white testimonial-rec shadow-xl leading-10 text-base p-10 rounded-3xl z-30 overflow-auto overscroll-contain"
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