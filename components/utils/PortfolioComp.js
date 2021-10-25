import React from 'react';

const PortfolioComp = (props) => {

    return (
        <React.Fragment>
                    {/* <div
                        className="lg:ml-56 text-2xl pt-56 lg:pt-0 pb-10 lg:pb-0"
                    ></div> */}
                    {/* <div> */}
                        <div
                            className="absolute left-5 lg:left-0 bg-white testimonial-rec shadow-xl leading-10 p-10 rounded-3xl z-30 lg:ml-44 overflow-auto overscroll-contain"
                        >
                        <h2
                            className="text-2xl"
                        >project title</h2>
                            I’ve been a Lead Instructor at Flatiron School for close to 3 years and have graduated over 1500 students. I don’t often write recommendations but I do when I notice something special. There are 3 things I look for in a student to gauge their likelihood to be highly successful engineers: resiliency, ability to receive feedback, and impact on others. Alex exhibits all three.
                            <br/>
                            There was a moment where I’ve had to give constructive feedback to Alex about his code and performance on a code challenge. Most students in this situation respond with resentment or denial. Alex, on the other hand, gracefully accepted the feedback. He spoke with me about how he could improve and what suggestions I had. Not only did Alex execute on this feedback, improving in every area, he became one of the strongest students I’ve ever had. In fact, he’s the first student of mine to build his own Ruby gem to help initialize new CLI projects, eliminating a prominent pain point for his classmates. Additionally, Alex would offer his time to help his fellow classmates who were struggling with understanding and implementing concepts. The ability to acknowledge areas of opportunities and the resiliency to turn them into strengths are integral to success in any career but particularly significant for a Software Engineer.
                            <br/> 
                            Alex has proven that he is self motivated and committed to learning and growing as a developer. I firmly believe he will be a valuable addition to any team.
                        </div>
                        <div
                            className="testimonial-rec2 bg-red shadow-xl rounded-3xl ml-12 lg:ml-56 mt-16 z-0 left-5 lg:left-0"
                        ></div>
                    {/* </div> */}
        </React.Fragment>
    )
}

export default PortfolioComp