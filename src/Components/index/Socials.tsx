"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa"
import { SiteContainer } from "../Shared/SiteContainer"

interface SocialLink {
    href: string
    icon: React.ReactNode
    color: string
    label: string
}

const socialLinks: SocialLink[] = [
    {
        href: "https://github.com/bagheri-dev",
        icon: <FaGithub />,
        color: "hover:text-[#4876CE]",
        label: "GitHub",
    },
    {
        href: "https://www.linkedin.com/in/mahdi-bagheri-dev/",
        icon: <FaLinkedin />,
        color: "hover:text-[#0A66C2]",
        label: "LinkedIn",
    },
    {
        href: "https://t.me/bagheri_dev01",
        icon: <FaTelegram />,
        color: "hover:text-[#0088cc]",
        label: "Telegram",
    },
]

export const ContactMe: React.FC = () => {
    const titleVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    }

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } },
    }

    const socialVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, delay: 0.4 + i * 0.1, ease: "easeOut" },
        }),
    }

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.7, ease: "easeOut" } },
    }

    return (
        <section id="contact-me" className="relative py-24 lg:py-40 overflow-hidden bg-gray-900 border-t border-white/10">
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
                    className="flex flex-col items-center text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2
                        className="text-2xl lg:text-3xl font-semibold text-white mb-4"
                        variants={titleVariants}
                    >
                        Let’s Work Together
                    </motion.h2>
                    <motion.p
                        className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-8"
                        variants={textVariants}
                    >
                        Ready to bring your vision to life? Connect with me to discuss your project or book a consultation to explore how I can create a stunning, high-performance website for you.
                    </motion.p>

                    <motion.div
                        className="flex justify-center gap-6 text-3xl text-white mb-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {socialLinks.map((link, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={socialVariants}
                                className="relative group"
                            >
                                <Link
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`transition-transform transform group-hover:scale-110 ${link.color}`}
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </Link>
                                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {link.label}
                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div variants={buttonVariants}>
                        <Link href="https://cal.com/mahdi-bagheri-dev" target="_blank" className="group relative">
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
                  Book a Consultation
                </span>
                                <span className="absolute top-0 left-0 w-full h-0 bg-white/30 group-hover:h-full transition-all duration-700 ease-[cubic-bezier(.6,.4,0,1)]"></span>
                                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-white/40 group-hover:w-64 group-hover:h-64 transition-all duration-700 ease-out"></span>
                            </button>
                            <span className="absolute -bottom-2 -left-2 w-full h-full bg-blue-800/40 rounded-xl group-hover:-bottom-1 group-hover:-left-1 transition-all duration-300 -z-10"></span>
                        </Link>
                    </motion.div>
                </motion.div>
            </SiteContainer>
        </section>
    )
}