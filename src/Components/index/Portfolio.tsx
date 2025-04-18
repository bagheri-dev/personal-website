"use client"

import Image from "next/image"
import { SiteContainer } from "../Shared/SiteContainer"
import { CardPorfolio } from "./Card/CardPorfolio"
import { CardOtherPortfolio } from "./Card/CardOtherPortfolio"
import { CardPorfolioMobile } from "./Card/CardPorfolioMobile"

const projects = [
    {
        title: "Golden Coffee Shop",
        image: "/projects/golden-coffee-shop.png",
        description: "Welcome to Golden Coffee Shop, an elegant and fully responsive online platform for selling coffee! Built with Next.js, this project combines performance, scalability, and modern design to deliver an exceptional user experience for coffee lovers worldwide.",
        tech: ["Next.js", "Tailwind", "Api"],
        github: "https://github.com/bagheri-dev/golden-coffee-shop",
        demo: "https://golden-coffee-shop.vercel.app/",
    },
    {
        title: "Artin Shop",
        image: "/projects/artin-shop.png",
        description: "Welcome to Artin Shop! Built with Next.js, this project combines performance, scalability, and modern design to deliver an exceptional user experience for coffee lovers worldwide.",
        tech: ["Next.js", "Tailwind", "Sass"],
        github: "https://github.com/bagheri-dev/artin-shop",
        demo: "https://artin-shop-self.vercel.app/",
    },
]
const OtherProject = [
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

export const Portfolio = () => {
    return (
        <div id="projects" className="pb-24 lg:pb-40">
            <SiteContainer>
                <div className="flex items-end gap-x-2 pb-10">
                    <Image className="w-10 lg:w-[54px]" src={"/3.svg"} alt="icon 1" width={54} height={82} />
                    <div className="flex items-center gap-x-2 overflow-hidden">
                        <h2 className="text-lg lg:text-[32px] font-semibold text-white text-nowrap">Where I’ve worked</h2>
                        <div className="bg-[#4876CE] w-[150px] xl:w-[417px] h-0.5"></div>
                    </div>
                </div>
                <div className="hidden lg:block space-y-6 pb-20">
                    {projects.map((project, index) => (
                        <CardPorfolio
                            key={index}
                            title={project.title}
                            image={project.image}
                            description={project.description}
                            tech={project.tech}
                            github={project.github}
                            demo={project.demo}
                        />
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 lg:hidden mb-16">
                    {projects.map((project, index) => (
                        <CardPorfolioMobile
                            key={index}
                            title={project.title}
                            image={project.image}
                            description={project.description}
                            tech={project.tech}
                            github={project.github}
                            demo={project.demo}
                        />
                    ))}
                </div>
                <div>
                    <h3 className="text-center text-xl lg:text-[32px] text-[#B9B9B9] pb-20">
                        Other Noteworthy Projects
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                        {OtherProject.map((project, index) => (
                            <CardOtherPortfolio
                                key={index}
                                title={project.title}
                                description={project.description}
                                tech={project.tech}
                                github={project.github}
                                demo={project.demo}
                            />
                        ))}
                    </div>
                </div>
            </SiteContainer>
        </div>
    )
}
