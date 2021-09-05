import React from 'react';
import IntroNav from '../utils/IntroNav'

const Intro = () => {

    return (
        <React.Fragment>
            <section
                className="mt-32 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 justify-items-center item-stretch"
            >
                <IntroNav/>
                <div className="self-center z-50">
                    <img
                        src="/profile-pic.png"
                        className="shadow-xl rounded-full md:w-3/5 mx-auto bg-white"
                    />
                </div>
                <div className="code-wrapper self-center hidden lg:block">
                    <div className="code text-lg font-mono">
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
            </section>
        </React.Fragment>
    )
}

export default Intro