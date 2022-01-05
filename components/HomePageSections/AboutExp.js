import React from 'react';
import PageMargin from '../utils/PageMargin'
import cx from 'classnames'
import Link from 'next/link'
import SmoothScrollLink from '../utils/SmoothScrollLink'
import Skills from '../../data/skills.json'
import ReactMarkdown from 'react-markdown'

const AboutExp = (props) => {

    const {
        jobData,
        setSelectedComp
    } = props

    // console.log(jobData?.jobs);

    return (
        <React.Fragment>
            <PageMargin>
                <h1
                    className="text-5xl font-reross text-altYellow leading-relaxed"
                >about me</h1>
                <section
                    className="flex text-3xl"
                >
                    <SmoothScrollLink
                        className="mr-5 font-reross cursor-pointer anim-text"
                        activeClass="active"
                        // to="skills"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        exact="true"
                        offset={5}
                        linkText="skills"
                        setSelectedComp={setSelectedComp}
                    />
                    |
                    <SmoothScrollLink
                        className="ml-5 font-reross cursor-pointer anim-text"
                        activeClass="active"
                        to="experience"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        exact="true"
                        offset={-100}
                        linkText="experience"
                        setSelectedComp={setSelectedComp}
                    />
                </section>
                <section
                    className="mt-20"
                >
                    <h2
                        id="skills"
                        className="text-4xl font-reross text-altYellow leading-relaxed"
                    >skills</h2>
                    <section
                        className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-10"
                    >
                        {Skills.map((skill) => {
                            return (
                                <div
                                    className="text-center rounded-xl"
                                >
                                    <img
                                        src={skill.image}
                                        className="w-auto h-12 mx-auto"
                                    />
                                    <div
                                        className="mt-2"
                                    >
                                        {skill.name}
                                    </div>
                                </div>
                            )
                        })}
                    </section>
                </section>
                <section
                    id="experience"
                    className="mt-20"
                >
                    <h2
                        id="experience"
                        className="text-4xl font-reross text-altYellow leading-relaxed"
                    >experience</h2>
                    <section
                        className="mt-10"
                    >
                        {jobData?.jobs.map((job) => {
                            return (
                                <section
                                    id={job?.companyName}
                                    className="grid grid-cols-1 md:grid-cols-2 items-stretch"
                                >
                                    <div
                                        className="self-center"
                                    >
                                        <img
                                            src={job?.companyLogo.url}
                                            className="h-32 w-auto mx-auto"
                                        />
                                    </div>
                                    <div
                                        className="self-center"
                                    >
                                        <h3>
                                            {job?.companyName}
                                        </h3>
                                        <h4>
                                            {job?.position}
                                        </h4>
                                        <p>
                                            <ReactMarkdown
                                                children={job?.responsibilities}
                                                components={{
                                                    ul({ node, children, ...props }) {
                                                        return (
                                                            <ul
                                                                className="list-disc ml-5"
                                                                {...props}
                                                            >
                                                                <li>{ children }</li>
                                                            </ul>
                                                        )
                                                    }
                                                }}
                                            />
                                        </p>
                                    </div>
                                </section>
                            )
                        })}
                    </section>
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

// {
//     "id": "ckve5tilcq4vj0d79r7maunfs",
//     "position": "Web Project Coordinator",
//     "startDate": "August 2016",
//     "companyName": "New York University - Robert F. Wagner Graduate School of Public Service",
//     "companyWebsite": "https://wagner.nyu.edu/",
//     "companyLogo": {
//         "url": "https://media.graphcms.com/OPqzH32TtGTkdcatr7n2"
//     },
//     "endDate": "March 2017",
//     "responsibilities": "- Acted as the liaison between the IT web team and the school’s faculty/staff\n- Supervised content placement, editorial proofreading, and provided feedback to departments"
// }

export default AboutExp