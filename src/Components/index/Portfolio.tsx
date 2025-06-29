"use client"

import Image from "next/image"
import { SiteContainer } from "../Shared/SiteContainer"
import { CardPorfolio } from "./Card/CardPorfolio"
import { CardOtherPortfolio } from "./Card/CardOtherPortfolio"
import { CardPorfolioMobile } from "./Card/CardPorfolioMobile"
import { motion } from "framer-motion"
import React from "react";

interface Project {
    title: string
    image: string
    description: string
    tech: string[]
    github: string
    demo: string
}

interface OtherProject {
    title: string
    description: string
    tech: string[]
    github: string
    demo: string
}

const projects: Project[] = [
    {
        title: "Golden Coffee Shop",
        image: "/projects/golden-coffee-shop.webp",
        description: "Welcome to Golden Coffee Shop, an elegant and fully responsive online platform for selling coffee! Built with Next.js, this project combines performance, scalability, and modern design to deliver an exceptional user experience for coffee lovers worldwide.",
        tech: ["Next.js", "Tailwind", "Api"],
        github: "https://github.com/bagheri-dev/golden-coffee-shop",
        demo: "https://golden-coffee-shop.vercel.app/",
    },
    {
        title: "StreamVibe",
        image: "/projects/stream-vibe.webp",
        description: "Stream Vibe is a movie web app that allows users to explore movies and their details, powered by the TMDB API. It features a clean, responsive design built with React, Next.js, and Tailwind CSS, offering a seamless browsing and subscription experience.",
        tech: ["Next.js", "Tailwind", "REST Api", "tanstack query", "Framer Motion", "Swiper"],
        github: "https://github.com/bagheri-dev/streom-vibe",
        demo: "https://streom-vibe.vercel.app/",
    },
    {
        title: "yek pelle balatar",
        image: "/projects/yek-pelle-balatar.webp",
        description: "This project is a professional website for `Yek Pelle Balatar Academy`, designed to showcase business consulting services, online courses, and content by Aydin Namdar. built using Next.js and Tailwind CSS, the site aims to offer a user-friendly and dynamic experience, enabling business growth and personal development through interactive features and educational resources. ",
        tech: ["Next.js", "Tailwind","Framer Motion", "Swiper"],
        github: "https://github.com/bagheri-dev/yek-pelle-balatar",
        demo: "https://yek-pelle-balatar.vercel.app/",
    },
    {
        title: "Karazma",
        image: "/projects/karazma.webp",
        description: "The Karazma website is an educational and service platform dedicated to enhancing workforce skills and improving organizational performance. With a focus on scientific and principled methods, Karazma helps organizations build professional, committed, and productive teams. By offering training and consulting services, the platform aims to strengthen individual and team competencies to achieve sustainable organizational success.",
        tech: ["Next.js", "Tailwind","Framer Motion", "Swiper"],
        github: "https://github.com/bagheri-dev/karazma",
        demo: "https://karazma.vercel.app/",
    },
]

const otherProjects: OtherProject[] = [
    {
        title: "Artin Shop",
        description: "Welcome to Artin Shop! Built with Next.js, this project combines performance, scalability, and modern design to deliver an exceptional user experience for coffee lovers worldwide.",
        tech: ["Next.js", "Tailwind", "Sass"],
        github: "https://github.com/bagheri-dev/artin-shop",
        demo: "https://artin-shop-self.vercel.app/",
    },
    {
        title: "Nexcent",
        description: "This project is a modern UI built using React and Tailwind CSS. The goal of this project is to provide an engaging and seamless user experience with clean and optimized code. It includes reusable components, modular design, and customization options for fast and easy web application development.",
        tech: ["HTML", "Tailwind"],
        github: "https://github.com/bagheri-dev/Nexcent",
        demo: "https://bagheri-dev.github.io/Nexcent/",
    },
    {
        title: "Shopet",
        description: "A beautifully designed pet shop website built with React using a fully component-based architecture. The project showcases a stunning UI tailored to enhance user engagement and highlight my front-end design skills.",
        tech: ["ReactJs", "Tailwind"],
        github: "https://github.com/bagheri-dev/shopet",
        demo: "https://bagheri-dev.github.io/shopet/",
    },
    {
        title: "Travlog",
        description: "A modern and responsive travel website UI designed for showcasing destinations and travel services with visually appealing layouts and user-friendly design, built using Tailwind CSS.",
        tech: ["Tailwind"],
        github: "https://github.com/bagheri-dev/travlog",
        demo: "https://bagheri-dev.github.io/travlog/",
    },
]

export const Portfolio: React.FC = () => {
    const titleVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: i * 0.2, ease: "easeOut" },
        }),
    }

    const otherTitleVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.4, ease: "easeOut" } },
    }

    const otherCardVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0.6 + i * 0.15, ease: "easeOut" },
        }),
    }

    return (
        <div id="projects" className="relative pb-24 lg:pb-40 overflow-hidden">
            <SiteContainer>
                <motion.div
                    className="flex items-end gap-x-2 pb-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={titleVariants}
                >
                    <Image className="w-10 lg:w-[54px]" src={"/2.svg"} alt="icon 1" width={54} height={82} />
                    <div className="flex items-center gap-x-2 overflow-hidden">
                        <h2 className="text-lg lg:text-[32px] font-semibold text-white text-nowrap">Where I’ve worked</h2>
                        <div className="bg-[#4876CE] w-[150px] xl:w-[417px] h-0.5"></div>
                    </div>
                </motion.div>

                <div className="hidden lg:block space-y-6 pb-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                        >
                            <CardPorfolio
                                title={project.title}
                                image={project.image}
                                description={project.description}
                                tech={project.tech}
                                github={project.github}
                                demo={project.demo}
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 lg:hidden mb-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                        >
                            <CardPorfolioMobile
                                title={project.title}
                                image={project.image}
                                description={project.description}
                                tech={project.tech}
                                github={project.github}
                                demo={project.demo}
                            />
                        </motion.div>
                    ))}
                </div>

                <div>
                    <motion.h3
                        className="text-center text-xl lg:text-[32px] text-[#B9B9B9] pb-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={otherTitleVariants}
                    >
                        Other Noteworthy Projects
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                        {otherProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={otherCardVariants}
                            >
                                <CardOtherPortfolio
                                    title={project.title}
                                    description={project.description}
                                    tech={project.tech}
                                    github={project.github}
                                    demo={project.demo}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SiteContainer>
        </div>
    )
}