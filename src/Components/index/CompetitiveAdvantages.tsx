"use client"

import { motion } from "framer-motion"
import { SiteContainer } from "../Shared/SiteContainer"
import Image from "next/image"

interface Advantage {
    metric: string
    myApproach: string
    othersApproach: string
    icon: string
}

const advantages: Advantage[] = [
    {
        metric: "Design Quality",
        myApproach: "Craft pixel-perfect, user-centric UI/UX with modern tools like Tailwind CSS and Framer Motion, ensuring intuitive and engaging experiences.",
        othersApproach: "Often rely on generic templates or outdated design trends, leading to less engaging and less optimized interfaces.",
        icon: "/paint-kit-dynamic-premium.png",
    },
    {
        metric: "Development Speed",
        myApproach: "Deliver projects quickly using Next.js and reusable components, maintaining high quality and performance without delays.",
        othersApproach: "Slower delivery due to less efficient workflows or reliance on heavier frameworks, causing project delays.",
        icon: "/clock-dynamic-premium.png",
    },
    {
        metric: "Tech Stack",
        myApproach: "Use cutting-edge technologies like React, Next.js, and Tailwind CSS for scalable, high-performance, and future-proof solutions.",
        othersApproach: "May use older or less optimized tools, resulting in slower, less maintainable websites.",
        icon: "/fire-dynamic-premium.png",
    },
    {
        metric: "Performance & SEO",
        myApproach: "Optimize every project for fast load times, accessibility, and SEO, ensuring top rankings and user satisfaction.",
        othersApproach: "Often overlook performance and SEO, leading to slower sites and lower search visibility.",
        icon: "/rocket-dynamic-premium.svg",
    },
]

export const CompetitiveAdvantages: React.FC = () => {
    const titleVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    }

    const cardVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: i * 0.2, ease: "easeOut" },
        }),
    }

    return (
        <div id="advantages" className="relative pb-16 lg:pb-[115px] overflow-hidden">
            <svg
                className="absolute top-0 left-0 w-full h-full opacity-10 z-0"
                viewBox="0 0 1440 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 400C200 300 400 500 600 400S1000 300 1200 400T1440 600"
                    stroke="#4876CE"
                    strokeWidth="4"
                    strokeOpacity="0.5"
                />
                <circle cx="200" cy="600" r="120" fill="#4876CE" fillOpacity="0.2" />
                <circle cx="1200" cy="200" r="100" fill="#4876CE" fillOpacity="0.2" />
            </svg>

            <SiteContainer>
                <motion.div
                    className="flex items-center gap-x-2 pb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={titleVariants}
                >
                    <Image
                        className="w-10 lg:w-[54px]"
                        src="/3.svg"
                        alt="advantage icon"
                        width={54}
                        height={82}
                    />
                    <div className="flex items-center gap-x-2 overflow-hidden">
                        <h2 className="text-lg lg:text-[32px] font-semibold text-white text-nowrap">Why I Stand Out</h2>
                        <div className="bg-[#4876CE] w-[150px] xl:w-[417px] h-0.5"></div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/40 transition-shadow duration-300 backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <Image
                                    src={advantage.icon}
                                    alt={`${advantage.metric} icon`}
                                    width={60}
                                    height={60}
                                    className="object-contain"
                                />
                                <h3 className="text-xl font-semibold text-white">{advantage.metric}</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-4 bg-cyan-500/10 rounded-lg">
                                    <h4 className="text-sm font-medium text-cyan-400 mb-2">My Approach</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">{advantage.myApproach}</p>
                                </div>
                                <div className="p-4 bg-gray-700/50 rounded-lg">
                                    <h4 className="text-sm font-medium text-gray-400 mb-2">Others&#39; Approach</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{advantage.othersApproach}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SiteContainer>
        </div>
    )
}