"use client"
import Image from "next/image";
import { ContactMeButton } from "../Shared/Button/ContactMe";
import { ResumeButton } from "../Shared/Button/Resume";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const menu = [
    { id: 1, name: "About Me", src: "#about-me" },
    { id: 2, name: "Experience", src: "#experience" },
    { id: 3, name: "Projects", src: "#projects" },
    { id: 4, name: "Activity", src: "#activity" },
    { id: 5, name: "Contact Me", src: "#contact-me" },
];

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuVariants = {
        hidden: { x: "-100%", opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.3, ease: "easeInOut" },
        },
        exit: {
            x: "-100%",
            opacity: 0,
            transition: { duration: 0.3, ease: "easeInOut" },
        },
    };

    const scrollToSection = (sectionId : string) => {
        const section = document.querySelector(sectionId);
        if (section) {
            const headerOffset = 120;
            const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = sectionPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <header className="py-2.5 px-4 lg:px-4">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <div className="flex items-center gap-x-10 xl:gap-x-16">
                    <div>
                        <Image unoptimized src={"/logo.png"} alt="logo" width={80} height={50} />
                    </div>
                    <nav className="hidden lg:block">
                        <ul className="flex items-center lg:gap-x-10 xl:gap-x-12 py-6 xl:text-lg">
                            {menu.map((item) => (
                                <li
                                    key={item.id}
                                    className="transition-colors hover:text-[#12EAEA] cursor-pointer"
                                    onClick={() => scrollToSection(item.src)}
                                >
                                    <span className="text-[#12EAEA]">{item.id}.</span>
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-x-8">
                    <div className="hidden lg:flex items-center gap-x-6 xl:gap-x-8">
                        <ContactMeButton />
                        <ResumeButton />
                    </div>
                    <button
                        className="lg:hidden"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <motion.div
                            className="fixed top-0 left-0 h-full w-72 bg-[#0C1B31] z-50 lg:hidden p-6"
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <button
                                className="mb-6"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <X size={28} />
                            </button>
                            <ul className="flex flex-col gap-y-6 text-lg">
                                {menu.map((item) => (
                                    <li
                                        key={item.id}
                                        className="transition-colors hover:text-[#12EAEA] cursor-pointer"
                                        onClick={() => {
                                            scrollToSection(item.src);
                                            setIsMenuOpen(false);
                                        }}
                                    >
                                        <span className="text-[#12EAEA]">{item.id}.</span>
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 flex flex-col gap-y-4">
                                <ContactMeButton />
                                <ResumeButton />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};