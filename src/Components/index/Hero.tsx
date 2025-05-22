"use client"
import Image from "next/image";
import { SiteContainer } from "../Shared/SiteContainer";
import Link from "next/link";
import { motion } from "framer-motion";

export const Hero = () => {
    const shapeVariants = {
        initial: { scale: 0.8, opacity: 0.3 },
        animate: {
            scale: [0.8, 1, 0.8],
            opacity: [0.3, 0.5, 0.3],
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        },
    };

    const tagVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
        }),
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } },
    };

    const descVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4, ease: "easeOut" } },
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, delay: 0.6 + i * 0.2, ease: "easeOut" },
        }),
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" } },
    };

    return (
        <div className="relative pb-16 lg:pb-[116px] pt-24 lg:pt-36 px-4 overflow-hidden">
            <motion.div
                className="absolute inset-0 -z-10"
                initial="initial"
                animate="animate"
                variants={shapeVariants}
            >
                <svg
                    className="absolute top-0 left-0 w-full h-full opacity-30"
                    viewBox="0 0 1440 600"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 200C200 100 400 300 600 200S1000 100 1200 200T1440 400"
                        stroke="#0C1B31"
                        strokeWidth="4"
                        strokeOpacity="0.5"
                    />
                    <circle cx="300" cy="500" r="120" fill="#0C1B31" fillOpacity="0.3" />
                    <circle cx="1100" cy="150" r="100" fill="#0C1B31" fillOpacity="0.3" />
                </svg>
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#0C1B31] blur-[100px]"></div>
                <div className="absolute top-1/4 -left-40 w-[400px] h-[200px] bg-[#0C1B31] transform -rotate-45 blur-[80px]"></div>
                <div className="absolute bottom-20 right-20 w-0 h-0 border-l-[150px] border-l-transparent border-b-[300px] border-b-[#0C1B31]/50 border-r-[150px] border-r-transparent blur-[70px]"></div>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
            </motion.div>

            <SiteContainer>
                <motion.div
                    className="flex flex-col items-center justify-center w-full max-w-[700px] mx-auto relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between w-full mb-8 gap-4">
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4">
                            {["⚫ Fast", "⚫ Performance", "⚫ Accessible", "⚫ SEO-Optimized Website that deliver results"].map(
                                (item, index) => (
                                    <motion.span
                                        key={index}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 inline-block bg-gray-900/50 px-3 py-1 rounded-full"
                                        custom={index}
                                        variants={tagVariants}
                                    >
                                        {item}
                                    </motion.span>
                                )
                            )}
                        </div>
                        <motion.div variants={imageVariants}>
                            <Image
                                className="rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-500"
                                src="/lighthouse-100.gif"
                                alt="Lighthouse performance"
                                width={300}
                                height={50}
                            />
                        </motion.div>
                    </div>

                    <motion.div variants={titleVariants} className="mb-8 w-full">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] text-center leading-tight font-bold">
                            Innovative Design <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 animate-text-shimmer">
                                Elevated Brands
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div variants={descVariants} className="w-full mb-12">
                        <p className="text-center text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                            Transform your brand with cutting-edge design that not only stands out but also drives real results. We craft
                            experiences that captivate your audience, build trust, and turn visitors into loyal customers. Let us help you
                            elevate your brand to its highest potential, where innovation and design meet to create lasting impact.
                        </p>
                    </motion.div>

                    <div className="pt-5 flex flex-wrap justify-center gap-5 sm:gap-8">
                        <motion.div custom={0} variants={buttonVariants}>
                            <Link href={"https://cal.com/mahdi-bagheri-dev"} target={"_blank"} className="group relative">
                                <button className="relative z-10 text-lg cursor-pointer py-3 px-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl font-semibold text-white overflow-hidden transition-all duration-500 hover:rounded-2xl shadow-lg hover:shadow-blue-500/40">
                                    <span className="relative z-10 flex items-center gap-2">
                                        <svg
                                            className="w-5 h-5 group-hover:animate-bounce"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                        Book Your Time Now
                                    </span>
                                    <span className="absolute top-0 left-0 w-full h-0 bg-white/30 group-hover:h-full transition-all duration-700 ease-[cubic-bezier(.6,.4,0,1)]"></span>
                                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-white/40 group-hover:w-64 group-hover:h-64 transition-all duration-700 ease-out"></span>
                                </button>
                                <span className="absolute -bottom-2 -left-2 w-full h-full bg-blue-800/40 rounded-xl group-hover:-bottom-1 group-hover:-left-1 transition-all duration-300 -z-10"></span>
                            </Link>
                        </motion.div>

                        <motion.div custom={1} variants={buttonVariants}>
                            <Link href={"#projects"} className="group relative">
                                <button className="relative z-10 text-lg cursor-pointer py-3 px-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-500 hover:rounded-2xl shadow-lg hover:shadow-purple-500/40">
                                    <span className="relative z-10 flex items-center gap-2">
                                        <svg
                                            className="w-5 h-5 group-hover:animate-spin"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                        </svg>
                                        See My Work
                                    </span>
                                    <span className="absolute top-0 -left-full w-full h-full bg-white/10 group-hover:left-0 transition-all duration-700 ease-[cubic-bezier(.6,.4,0,1)]"></span>
                                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-500 delay-100"></span>
                                </button>
                                <span className="absolute -bottom-2 -right-2 w-full h-full bg-purple-800/40 rounded-xl group-hover:-bottom-1 group-hover:-right-1 transition-all duration-300 -z-10"></span>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </SiteContainer>
        </div>
    );
};