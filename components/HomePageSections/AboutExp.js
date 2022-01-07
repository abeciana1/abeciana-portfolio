import React from 'react';
import PageMargin from '../utils/PageMargin'
import SmoothScrollLink from '../utils/SmoothScrollLink'
import Skills from '../../data/skills.json'
import ReactMarkdown from 'react-markdown'
import moment from 'moment'

const AboutExp = (props) => {

    const {
        jobData,
        setSelectedComp
    } = props

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
                        className="ml-5 font-reross cursor-pointer anim-text mr-5"
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
                    |
                    <SmoothScrollLink
                        className="ml-5 font-reross cursor-pointer anim-text"
                        activeClass="active"
                        to="education"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        exact="true"
                        offset={-100}
                        linkText="education"
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
                        className="text-4xl font-reross text-altYellow leading-relaxed"
                    >experience</h2>
                    <section
                        className="mt-10"
                    >
                        {jobData?.jobs.map((job) => {
                            return (
                                <section
                                    key={job?.id}
                                    id={job?.companyName}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch py-8"
                                >
                                    <div
                                        className="self-center"
                                    >
                                        <img
                                            src={job?.companyLogo?.url || "/profile-pic.png"}
                                            className="w-3/5 mx-auto"
                                        />
                                        <div
                                            className="text-center mt-5 text-lg"
                                        >
                                            {job?.companyDescription}
                                        </div>
                                    </div>
                                    <div
                                        className="self-center leading-9"
                                    >
                                        <h3
                                            className="text-3xl"
                                        >
                                            {job?.companyName}
                                        </h3>
                                        <h4
                                            className="text-2xl"
                                        >
                                            {job?.position}
                                        </h4>
                                        <div
                                            className="text-xl"
                                        >
                                            {moment(job?.startDate).format("MMM YYYY")} — {job?.endDate === "2022-01-01" ? "Present" : moment(job?.endDate).format("MMM YYYY")}
                                        </div>
                                        {job?.companyWebsite && (
                                            <a
                                                href={job?.companyWebsite}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-altBlue underline"
                                                alt={job?.companyName}
                                            >
                                                Website
                                            </a>
                                        )}
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
                <section
                    id="education"
                    className="mt-20"
                >
                    <h2
                        className="text-4xl font-reross text-altYellow leading-relaxed"
                    >experience</h2>
                    <section
                        className="mt-10"
                    >
                        {jobData?.educations.map((school) => {
                            console.log(school)
                            return (
                                <section
                                    key={school?.id}
                                    id={school?.schoolName}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch py-8"
                                >
                                    <div
                                        className="self-center"
                                    >
                                        <img
                                            src={school?.schoolImage?.url}
                                            className="w-3/5 mx-auto"
                                        />
                                    </div>
                                    <div
                                        className="self-center leading-9"
                                    >
                                        <h3
                                            className="text-3xl"
                                        >
                                            {school?.schoolName}
                                        </h3>
                                        {school?.schoolWebsite && (
                                            <a
                                                href={school?.schoolWebsite}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                alt={school?.schoolName}
                                                className="text-altBlue underline"
                                            >
                                                Website
                                            </a>
                                        )}
                                        <p>
                                            <ReactMarkdown
                                                children={school?.achievements}
                                                components={{
                                                    p({ children, ...props }) {
                                                        return (
                                                            <p
                                                                className=""
                                                                {...props}
                                                            >
                                                                { children }
                                                            </p>
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

export default AboutExp