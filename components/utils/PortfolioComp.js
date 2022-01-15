import React from 'react';
import ReactMarkdown from 'react-markdown'

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
                    {proj?.projectTitle}
                </h3>
            <section
                className="text-center grid grid-cols-1 md:grid-cols-2 items-stretch mt-5"
            >
                <div
                    className="self-center"
                >
                    <img
                        src={proj?.projectImage?.url}
                        className="proj-img mx-auto"
                        alt={"Alex Beciana - " + proj?.projectTitle}
                    />
                    <div
                        className="mt-2"
                    >
                        {proj.projectLinks?.map((link) => {
                            return (
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-altBlue"
                                    href={link.link}
                                    alt={"Alex Beciana - " + proj?.projectTitle + " - " + link.text}
                                >
                                    <span
                                        className="underline"
                                    >
                                        {link.text}
                                    </span>
                                    {" "}
                                </a>
                            )
                        })}
                    </div>
                </div>
                <div
                    className="p-5 mx-auto lg:w-3/4 self-center leading-7"
                >
                    <ReactMarkdown 
                        children={proj?.projectDescription}
                        components={{
                            p({ children, props }) {
                                return (
                                    <p
                                        className="text-lg"
                                        {...props}
                                    >
                                        { children }
                                    </p>
                                )
                            }
                        }}
                    />
                    <div
                        className="font-semiBold"
                    >
                            Status: 
                        <span
                            className="ml-2 font-normal"
                        >{proj?.projectStatus}</span>
                    </div>
                    <div className="font-semiBold leading-7">
                        Tech:
                            <span
                                className="ml-2 font-normal"
                            >
                                {proj?.technology}
                            </span>
                    </div>
                </div>
            </section>
            </section>
        </React.Fragment>
    )
}

export default PortfolioComp