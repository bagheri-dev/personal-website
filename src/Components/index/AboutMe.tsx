"use client"
import Image from "next/image";
import { SiteContainer } from "../Shared/SiteContainer";
import { motion } from "framer-motion";

export const AboutMe = () => {
    const titleVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } },
    };

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i : number) => ({
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3, delay: i * 0.1, ease: "easeOut" },
        }),
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4, ease: "easeOut" } },
    };

    return (
        <div id="about-me" className="relative pb-8 lg:pb-[160px] overflow-hidden">
            <svg
                className="absolute top-0 left-0 w-full h-full opacity-10 z-0"
                viewBox="0 0 1440 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 300C100 200 300 100 500 150C700 200 900 400 1100 350C1300 300 1400 200 1440 150"
                    stroke="#4876CE"
                    strokeWidth="4"
                    strokeOpacity="0.5"
                />
                <circle cx="200" cy="400" r="100" fill="#4876CE" fillOpacity="0.2" />
                <circle cx="1200" cy="200" r="80" fill="#4876CE" fillOpacity="0.2" />
            </svg>

            <SiteContainer>
                <motion.div
                    className="flex justify-between items-center flex-wrap xl:flex-nowrap relative z-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="flex flex-col">
                        <motion.div variants={titleVariants} className="flex items-end gap-x-2 pb-10">
                            <Image
                                className="w-10 lg:w-[54px]"
                                src={"/1.svg"}
                                alt="icon 1"
                                width={54}
                                height={82}
                            />
                            <div className="flex items-center gap-x-2 overflow-hidden">
                                <h2 className="text-lg lg:text-[32px] font-semibold text-nowrap">
                                    About Me
                                </h2>
                                <div className="bg-[#4876CE] w-[150px] xl:w-[417px] h-0.5"></div>
                            </div>
                        </motion.div>

                        {/* Animated Text */}
                        <motion.div variants={textVariants} className="pb-4">
                            <p className="text-gray-700 leading-relaxed">
                                Hi, I’m Mahdi Bagheri, a passionate front-end designer and
                                developer dedicated to creating seamless, high-impact digital
                                experiences that empower businesses to grow. With a strong focus
                                on clean code, modern design, and optimized performance, I craft
                                user-centric solutions that not only meet but exceed expectations.
                                <br />
                                Specializing in technologies like Tailwind CSS, JavaScript, React,
                                and Next.js, I bring your ideas to life with precision, speed, and
                                flair. Whether it’s optimizing user interfaces or building
                                responsive websites, I combine creativity with technical expertise
                                to deliver polished, professional products.
                                <br />
                                Although my professional experience is limited, my personal
                                projects have refined my skills and enabled me to create
                                responsive, high-quality websites that users love. If you&#39;re
                                looking for a dedicated designer who can transform your vision into
                                a functional, visually stunning product, let&#39;s connect! Together,
                                we can build something exceptional.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-y-2 justify-items-center">
                            {[
                                "html",
                                "css",
                                "tailwind",
                                "js",
                                "ts",
                                "react",
                                "redux",
                                "nextjs",
                                "vite",
                                "bootstrap",
                                "docker",
                                "git",
                                "github",
                                "materialui",
                                "npm",
                                "postman",
                            ].map((icon, index) => (
                                <motion.div
                                    key={icon}
                                    className="relative w-12 h-12"
                                    custom={index}
                                    variants={iconVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <Image
                                        src={`https://skillicons.dev/icons?i=${icon}`}
                                        alt={`${icon} icon`}
                                        fill
                                        className="object-contain"
                                        unoptimized
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div variants={imageVariants} className="w-full">
                        <Image
                            className="lg:min-w-[527px] rounded-lg shadow-lg"
                            src={"/funny-coding.webp"}
                            alt="about me"
                            width={527}
                            height={525}
                        />
                    </motion.div>
                </motion.div>
            </SiteContainer>
        </div>
    );
};