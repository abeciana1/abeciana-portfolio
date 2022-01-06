import React from 'react';

const PortfolioComp = (props) => {

    const {
        proj
    } = props

    return (
        <React.Fragment>
            <section
                className="py-5"
            >
                <h3
                    className="text-3xl"
                >
                    Project title
                </h3>
                <div
                    className=" py-5 grid grid-cols-3 flex justify-center mx-auto text-center"
                >
                    <div>Picture 1</div>
                    <div>Picture 2</div>
                    <div>Picture 3</div>
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
                        I’ve been a Lead Instructor at Flatiron School for close to 3 years and have graduated over 1500 students. I don’t often write recommendations but I do when I notice something special. There are 3 things I look for in a student to gauge their likelihood to be highly successful engineers: resiliency, ability to receive feedback, and impact on others. Alex exhibits all three. 

                        There was a moment where I’ve had to give constructive feedback to Alex about his code and performance on a code challenge. Most students in this situation respond with resentment or denial. Alex, on the other hand, gracefully accepted the feedback. He spoke with me about how he could improve and what suggestions I had. Not only did Alex execute on this feedback, improving in every area, he became one of the strongest students I’ve ever had. In fact, he’s the first student of mine to build his own Ruby gem to help initialize new CLI projects, eliminating a prominent pain point for his classmates. Additionally, Alex would offer his time to help his fellow classmates who were struggling with understanding and implementing concepts. The ability to acknowledge areas of opportunities and the resiliency to turn them into strengths are integral to success in any career but particularly significant for a Software Engineer. 

                        Alex has proven that he is self motivated and committed to learning and growing as a developer. I firmly believe he will be a valuable addition to any team. 
                    </div>
                </div>
            </section>
            </section>
        </React.Fragment>
    )
}

export default PortfolioComp