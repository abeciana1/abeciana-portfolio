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
                    {/* <div className="code-card justify-item-center self-center hidden lg:inline">
                        <code>sdlfijh</code>
                    </div> */}
                    <code className="code-card justify-item-center self-center hidden lg:inline">
                        <code className="code-wrapper">
                            <div className="code text-lg">
                                <div className="code-line">
                                    <code className="code-counter">
                                        1
                                    </code>
                                    <span className="code-text">
                                        <code className="declaration">const </code>
                                        <code className="function">alexBeciana</code>
                                        <code className="util"> {" = () => {"}</code>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <code className="code-counter">
                                        2
                                    </code>
                                    <span className="code-text sub">
                                        <code className="function">isCommunicative</code>
                                        <code className="util">()</code>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <code className="code-counter">
                                        3
                                    </code>
                                    <span className="code-text sub">
                                        <code className="function">isFlexibleAndAgile</code>
                                        <code className="util">()</code>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <code className="code-counter">
                                        4
                                    </code>
                                    <span className="code-text sub">
                                        <code className="function">isEntrepreneurial</code>
                                        <code className="util">()</code>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <code className="code-counter">
                                        5
                                    </code>
                                    <span className="code-text sub">
                                        <code className="declaration">let </code>
                                        <code>techSkills </code>
                                        <code className="util">{"= ["}</code>
                                        <code className="string">"React"</code>
                                        <code className="util">, </code>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <code className="code-counter">
                                        6
                                    </code>
                                    <span className="code-text sub">
                                        <code className="string">"Redux"</code>
                                        <code className="util">, </code>
                                        <code className="string">"JavaScript"</code>
                                        <code className="util">, </code>
                                        <code className="string">"OOP"</code>
                                        <code className="util">, </code>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <code className="code-counter">
                                        7
                                    </code>
                                    <span className="code-text sub">
                                        <code className="string">"Ruby"</code>
                                        <code className="util">, </code>
                                        <code className="string">"Ruby on Rails"</code>
                                        <code className="util">, </code>
                                        <code className="string">"HTML"</code>
                                        <code className="util">, </code>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <code className="code-counter">
                                        8
                                    </code>
                                    <span className="code-text sub">
                                        <code className="string">"CSS"</code>
                                        <code className="util">, </code>
                                        <code className="string">"Git"</code>
                                        <code className="util">, </code>
                                        <code className="string">"NextJS"</code>
                                        <code className="util">, </code>
                                        <code className="string">"Node"</code>
                                        <code className="util">, </code>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <code className="code-counter">
                                        9
                                    </code>
                                    <span className="code-text sub">
                                        <code className="string">"Express"</code>
                                        <code className="util">, </code>
                                        <code className="string">"Twilio"</code>
                                        <code className="util">, </code>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <code className="code-counter">
                                        10
                                    </code>
                                    <span className="code-text sub">
                                        <code className="string">"TypeScript"</code>
                                        <code className="util">, </code>
                                        <code className="string">"REST"</code>
                                        <code className="util">] </code>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <code className="code-counter">
                                        11
                                    </code>
                                    <span className="code-text sub">
                                        <code className="declaration">let </code>
                                        <code>otherSkills </code>
                                        <code className="util">{"= ["}</code>
                                        <code className="string">"Graphic </code>
                                        <code className="util">, </code>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <code className="code-counter">
                                        12
                                    </code>
                                    <span className="code-text sub">
                                        <code className="string">Design"</code>
                                        <code className="util">, </code>
                                        <code className="string">"Digital Marketing"</code>
                                        <code className="util">] </code>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <code className="code-counter">
                                        13
                                    </code>
                                    <span className="code-text sub">
                                        <code>console</code>
                                        <code className="util">.</code>
                                        <code className="function">log</code>
                                        <code className="util">(</code>
                                        <code>techSkills</code>
                                        <code className="util">)</code>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <code className="code-counter">
                                        14
                                    </code>
                                    <span className="code-text sub">
                                        <code>console</code>
                                        <code className="util">.</code>
                                        <code className="function">log</code>
                                        <code className="util">(</code>
                                        <code>otherSkills</code>
                                        <code className="util">)</code>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <code className="code-counter">
                                        15
                                    </code>
                                    <span className="code-text">
                                        <code className="util">{"}"}</code>
                                    </span>
                                </div>
                                <div className="code-line">
                                    <code className="code-counter">
                                        16
                                    </code>
                                    <code className="code-text">
                                        <code className="function">alexBeciana</code>
                                        <code className="util">()</code>
                                    </code>
                                </div>
                            </div>
                    </code>
                    </code>
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export default Intro