import React from 'react';
import PageMargin from '../components/utils/PageMargin'
import Image from 'next/image'
import SmoothScrollLink from '../components/utils/SmoothScrollLink'
import Skills from '../data/skills.json'
import ReactMarkdown from 'react-markdown'
const { Client } = require("@notionhq/client")
import { gql, GraphQLClient } from 'graphql-request'
import moment from 'moment'

const AboutPage = ({ jobData }) => {
    return (
    <React.Fragment>
            <PageMargin>
                <section
                    id="about"
                    className="homepage-section sticky lg:pt-4 flex flex-col md:grid md:grid-cols-2 gap-12 justify-items-center item-stretch"
                >
                        <section
                            className="self-center justify-self-start"
                        >
                        <section>
                            <h1
                                className="text-5xl font-reross leading-relaxed"
                            >
                                Hi I'm Alex Beciana
                            </h1>
                            <div
                                className="leading-10 text-lg"
                            >
                                Full stack software engineer with two years of experience with an entrepreneurial spirit. Previous experience with five  years in digital marketing, product management, and community management, working in tech (startup to FAANG), education, and music as well as leading a profitable startup. Accustomed to working across technical and non-technical teams and managing project roadmaps.
                            </div>
                            </section>
                        </section>
                        <section
                            className="self-center justify-self-start lg:justify-self-end lg:mx-20"
                        >
                            <div className="profile-callout">
                                <Image 
                                    src="/profile-callout-edited.png"
                                    layout="responsive"
                                    width={100}
                                    height={100}
                                    priority
                                    className="desktop-profile transform translate-x-0 hidden md:inline"
                                    alt="Alex Beciana (animated)"
                                />
                            </div>
                            <div
                                className="pt-5 hidden sm:block"
                            >
                                <h2 className="text-left text-3xl pb-5">Dev dad jokes</h2>
                                <img className="mx-auto" src="https://readme-jokes.vercel.app/api" alt="Dev Dad Jokes Card" />
                            </div>
                        </section>
                </section>
            </PageMargin>
            <PageMargin>
                <h1
                    className="text-5xl font-reross text-altYellow leading-relaxed"
                >about me</h1>
                <section
                    className="flex flex-wrap md:flow-row text-3xl"
                >
                    <SmoothScrollLink
                        className="mr-5 font-reross cursor-pointer anim-text"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        exact="true"
                        offset={5}
                        linkText="skills"
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
                    />
                    |
                    <SmoothScrollLink
                        className="md:ml-5 font-reross cursor-pointer anim-text"
                        activeClass="active"
                        to="education"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        exact="true"
                        offset={-100}
                        linkText="education"
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
                                            {moment(job?.startDate).format("MMM YYYY")} — {job?.endDate === "2023-01-01" ? "Present" : moment(job?.endDate).format("MMM YYYY")}
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
                    >education</h2>
                    <section
                        className="mt-10"
                    >
                        {jobData?.educations.map((school) => {
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

export async function getStaticProps() {
    const expClient = new GraphQLClient(process.env.GRAPH_CMS_API_ENDPOINT)
    
    const expQuery = gql`
        query {
        jobs(orderBy: endDate_DESC) {
            id
            position
            startDate
            companyName
            companyWebsite
            companyDescription
            companyLogo {
            url
            }
            endDate
            responsibilities
        }
        educations {
            id
            schoolName
            schoolWebsite
            schoolImage {
            url
            }
            achievements
        }
        }`
    
    const jobData = await expClient.request(expQuery)

    return {
        props: {
            jobData: jobData,
        }
    }
}

export default AboutPage