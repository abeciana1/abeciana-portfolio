import React from 'react';
import ReactMarkdown from 'react-markdown'

const PortfolioComp = (props) => {

    const {
        proj
    } = props

    console.log(proj)

//* {
//*     "id": "ckvffxh2wx2v30d79ngwd4jh9",
//*     "projectStatus": "Completed",
//*     "projectLink": "https://github.com/abeciana1/le-cine-frontend",
//*     "projectTitle": "Le Cine",
//*     "projectDescription": "A film club management app to bring meaningful conversation and film lovers together under one roof.",
//*     "projectImage": {
//*         "url": "https://media.graphcms.com/zX1wDQloQ0awintRywuh"
//*     },
//*     "technology": [
//*         "VanillaCSS",
//*         "Bootstrap",
//*         "JWTAuthentication",
//*         "React",
//*         "RubyOnRails"
//*     ]
//* }

    return (
        <React.Fragment>
            <section
                className="py-5"
            >
                <h3
                    className="text-3xl"
                >
                    {proj?.projectTitle}
                </h3>
            <section
                className="text-center grid grid-cols-1 md:grid-cols-2 items-stretch"
            >
                <div
                    className="self-center"
                >
                    <img
                        src={proj?.projectImage?.url}
                    />
                </div>
                <div
                    className="flex justify-center p-5 mx-auto lg:w-3/4 self-center"
                >
                    <div
                        // className="bg-white testimonial-rec shadow-xl leading-10 text-base p-10 rounded-3xl z-30 overflow-auto overscroll-contain"
                        className="leading-10 text-lg"
                    >
                        <ReactMarkdown 
                            children={proj?.projectDescription}
                            components={{
                                p({ children, props }) {
                                    return (
                                        <p
                                            {...props}
                                        >
                                            { children }
                                        </p>
                                    )
                                }
                            }}
                        />
                    </div>
                </div>
            </section>
            </section>
        </React.Fragment>
    )
}

export default PortfolioComp