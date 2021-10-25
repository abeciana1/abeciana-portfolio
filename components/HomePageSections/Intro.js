import React from 'react';
import IntroNav from '../utils/IntroNav'
import PageMargin from '../utils/PageMargin'

const Intro = () => {

    return (
        <React.Fragment>
            <PageMargin>
                <section
                    id="intro"
                    className="mt-16 text-center"
                >
                    <div>
                        <h1 className="text-4xl">Hi, I'm Alex!</h1>
                    </div>
                </section>
                <section
                    className="homepage-section mt-8 lg:pb-32 flex flex-col lg:grid lg:grid-cols-3 justify-items-center item-stretch"
                >
                    <IntroNav/>
                    <div className="justify-item-center self-center mx-auto z-30">
                        <img
                            src="/profile-pic.png"
                            className="shadow-xl rounded-full w-2/3 md:w-3/5 mx-auto bg-white"
                        />
                    </div>
                        <div
                            className="py-10 block lg:hidden mx-auto"
                        >
                            <h2 className="text-center text-3xl pb-5">Dev dad jokes</h2>
                            <img 
                                src="https://readme-jokes.vercel.app/api"
                                alt="Jokes Card" 
                                className="w-full"
                                />
                        </div>
                    <div className="code-card justify-item-center self-center hidden lg:inline">
                        <div className="code-wrapper">
                            <div className="code text-lg">
                                <div className="code-line">
                                    <span className="code-counter">
                                        1
                                    </span>
                                    <span className="code-text">
                                        <span className="declaration">const </span>
                                        <span className="function">alexBeciana</span>
                                        <span className="util"> {" = () => {"}</span>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <span className="code-counter">
                                        2
                                    </span>
                                    <span className="code-text sub">
                                        <span className="function">isCommunicative</span>
                                        <span className="util">()</span>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <span className="code-counter">
                                        3
                                    </span>
                                    <span className="code-text sub">
                                        <span className="function">isFlexibleAndAgile</span>
                                        <span className="util">()</span>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <span className="code-counter">
                                        4
                                    </span>
                                    <span className="code-text sub">
                                        <span className="function">isEntrepreneurial</span>
                                        <span className="util">()</span>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <span className="code-counter">
                                        5
                                    </span>
                                    <span className="code-text sub">
                                        <span className="declaration">let </span>
                                        <span>techSkills </span>
                                        <span className="util">{"= ["}</span>
                                        <span className="string">"React"</span>
                                        <span className="util">, </span>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <span className="code-counter">
                                        6
                                    </span>
                                    <span className="code-text sub">
                                        <span className="string">"Redux"</span>
                                        <span className="util">, </span>
                                        <span className="string">"JavaScript"</span>
                                        <span className="util">, </span>
                                        <span className="string">"OOP"</span>
                                        <span className="util">, </span>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <span className="code-counter">
                                        7
                                    </span>
                                    <span className="code-text sub">
                                        <span className="string">"Ruby"</span>
                                        <span className="util">, </span>
                                        <span className="string">"Ruby on Rails"</span>
                                        <span className="util">, </span>
                                        <span className="string">"HTML"</span>
                                        <span className="util">, </span>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <span className="code-counter">
                                        8
                                    </span>
                                    <span className="code-text sub">
                                        <span className="string">"CSS"</span>
                                        <span className="util">, </span>
                                        <span className="string">"Git"</span>
                                        <span className="util">, </span>
                                        <span className="string">"NextJS"</span>
                                        <span className="util">, </span>
                                        <span className="string">"Node"</span>
                                        <span className="util">, </span>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <span className="code-counter">
                                        9
                                    </span>
                                    <span className="code-text sub">
                                        <span className="string">"Express"</span>
                                        <span className="util">, </span>
                                        <span className="string">"Twilio"</span>
                                        <span className="util">, </span>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <span className="code-counter">
                                        10
                                    </span>
                                    <span className="code-text sub">
                                        <span className="string">"TypeScript"</span>
                                        <span className="util">, </span>
                                        <span className="string">"REST"</span>
                                        <span className="util">] </span>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <span className="code-counter">
                                        11
                                    </span>
                                    <span className="code-text sub">
                                        <span className="declaration">let </span>
                                        <span>otherSkills </span>
                                        <span className="util">{"= ["}</span>
                                        <span className="string">"Graphic </span>
                                        <span className="util">, </span>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <span className="code-counter">
                                        12
                                    </span>
                                    <span className="code-text sub">
                                        <span className="string">Design"</span>
                                        <span className="util">, </span>
                                        <span className="string">"Digital Marketing"</span>
                                        <span className="util">] </span>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <span className="code-counter">
                                        13
                                    </span>
                                    <span className="code-text sub">
                                        <span>console</span>
                                        <span className="util">.</span>
                                        <span className="function">log</span>
                                        <span className="util">(</span>
                                        <span>techSkills</span>
                                        <span className="util">)</span>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <span className="code-counter">
                                        14
                                    </span>
                                    <span className="code-text sub">
                                        <span>console</span>
                                        <span className="util">.</span>
                                        <span className="function">log</span>
                                        <span className="util">(</span>
                                        <span>otherSkills</span>
                                        <span className="util">)</span>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <span className="code-counter">
                                        15
                                    </span>
                                    <span className="code-text">
                                        <span className="util">{"}"}</span>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <span className="code-counter">
                                        16
                                    </span>
                                    <span className="code-text">
                                        <span className="function">alexBeciana</span>
                                        <span className="util">()</span>
                                    </span>
                                </div>
                            </div>
                    </div>
                    </div>
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export default Intro