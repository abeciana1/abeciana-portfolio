import React from 'react';
import IntroNav from '../utils/IntroNav'

const Intro = () => {

    return (
        <React.Fragment>
            <section
                className="grid grid-cols-3 gap-x-20 justify-items-center item-stretch"
            >
                <IntroNav/>
                <div className="self-center">
                    pic
                </div>
                <div className="self-center">
                    code
                </div>
            </section>
        </React.Fragment>
    )
}

export default Intro