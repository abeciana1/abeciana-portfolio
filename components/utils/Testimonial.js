import React from 'react';
import Image from 'next/image'

const Testimonial = (props) => {

    return (
        <React.Fragment>
            <div className="text-center">
                <h3
                    className="text-2xl"
                >
                    ...valuable addition to any team.
                </h3>
            </div>
            <section
                className="text-center flex justify-center"
            >
                <div
                    // className="bg-white testimonial-rec shadow-xl leading-10 text-base p-10 rounded-3xl z-30 overflow-auto overscroll-contain"
                    className="bg-white testimonial-rec w-3/4 leading-10 text-base p-10 z-30 overflow-auto overscroll-contain"
                >
                    I’ve been a Lead Instructor at Flatiron School for close to 3 years and have graduated over 1500 students. I don’t often write recommendations but I do when I notice something special. There are 3 things I look for in a student to gauge their likelihood to be highly successful engineers: resiliency, ability to receive feedback, and impact on others. Alex exhibits all three. 

                    There was a moment where I’ve had to give constructive feedback to Alex about his code and performance on a code challenge. Most students in this situation respond with resentment or denial. Alex, on the other hand, gracefully accepted the feedback. He spoke with me about how he could improve and what suggestions I had. Not only did Alex execute on this feedback, improving in every area, he became one of the strongest students I’ve ever had. In fact, he’s the first student of mine to build his own Ruby gem to help initialize new CLI projects, eliminating a prominent pain point for his classmates. Additionally, Alex would offer his time to help his fellow classmates who were struggling with understanding and implementing concepts. The ability to acknowledge areas of opportunities and the resiliency to turn them into strengths are integral to success in any career but particularly significant for a Software Engineer. 

                    Alex has proven that he is self motivated and committed to learning and growing as a developer. I firmly believe he will be a valuable addition to any team. 
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
                            src="/tashawn-williams-picture.jpeg"
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
                            Tashawn Williams
                        </div>
                        <div
                            className="font-medium"
                        >
                            Sr. Manager, Software Engineering Instruction
                        </div>
                    </div>
                </div>
            {/* <section
                className="relative testimonial flex flex-col lg:flex-row pb-32"
            >
                <div
                    className="lg:ml-44"
                >
                    <div
                        className="z-40 testimonial-pic mx-auto lg:mx-0"
                    >
                        <img
                            src="/tashawn-williams-picture.jpeg"
                            className="rounded-full bg-altYellow p-3"
                        />
                    </div>
                </div>
                    <div
                        className="font-reross lg:ml-5 md:text-center lg:text-left text-2xl pt-10 pb-10 lg:pb-0 mx-auto"
                    >Tashawn Williams — Sr. Manager, Software Engineering Instruction
                        <div
                            className="absolute bg-white text-left testimonial-rec shadow-xl leading-10 text-base p-10 rounded-3xl z-30 overflow-auto overscroll-contain"
                        >
                            I’ve been a Lead Instructor at Flatiron School for close to 3 years and have graduated over 1500 students. I don’t often write recommendations but I do when I notice something special. There are 3 things I look for in a student to gauge their likelihood to be highly successful engineers: resiliency, ability to receive feedback, and impact on others. Alex exhibits all three.
                            <br/>
                            There was a moment where I’ve had to give constructive feedback to Alex about his code and performance on a code challenge. Most students in this situation respond with resentment or denial. Alex, on the other hand, gracefully accepted the feedback. He spoke with me about how he could improve and what suggestions I had. Not only did Alex execute on this feedback, improving in every area, he became one of the strongest students I’ve ever had. In fact, he’s the first student of mine to build his own Ruby gem to help initialize new CLI projects, eliminating a prominent pain point for his classmates. Additionally, Alex would offer his time to help his fellow classmates who were struggling with understanding and implementing concepts. The ability to acknowledge areas of opportunities and the resiliency to turn them into strengths are integral to success in any career but particularly significant for a Software Engineer.
                            <br/> 
                            Alex has proven that he is self motivated and committed to learning and growing as a developer. I firmly believe he will be a valuable addition to any team.
                        </div>
                        <div
                            className="absolute testimonial-rec2 bg-altBlue shadow-xl rounded-3xl ml-12 lg:ml-10 mt-16 z-0"
                        ></div>
                    </div>
            </section> */}
        </React.Fragment>
    )
}

export default Testimonial