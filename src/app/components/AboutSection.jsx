"use client"

import React, { useState, useTransition } from 'react'
import Image from "next/image"
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>React</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>HTML</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Dr D. Y. PatilCollege Of Engineering ,Akurdi, Pune.</li>
                <li>Computer Science</li>
            </ul>
        )
    },
    {
        title: "Certification",
        id: "certification",
        content: (
            <ul className='list-disc pl-2'>
                <li>AWS Cloud</li>
            </ul>
        )
    },

]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
    return (
        <section className='text-white' id="about">
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
                <Image src="/images/Computer.jpg"
                    width={600}
                    height={600}
                    alt='Computer'
                    className='rounded-xl'
                />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base md:text-lg'>I am a MERN stack developer with a passion for creating interactive and responsive web applications.
                        I have experience working with JavaScript, React, Node.js, Express.js, HTML, CSS, Tailwind CSS and Git.
                        I am a quick learner and I am always looking to expand my knowledge and skill set
                    </p>

                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>{" "}Skills{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>{" "}Education{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}>{" "}Certificate{" "}</TabButton>

                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection