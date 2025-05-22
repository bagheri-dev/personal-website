"use client"
import Image from "next/image";
import { ContactMeButton } from "../Shared/Button/ContactMe";
// import { ResumeButton } from "../Shared/Button/Resume";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const menu = [
    { id: 1, name: "About Me", src: "#about-me" },
    // { id: 2, name: "Experience", src: "#experience" },
    { id: 2, name: "Projects", src: "#projects" },
    { id: 3, name: "FAQ", src: "#faq" },
    { id: 4, name: "Contact Me", src: "#contact-me" },
];

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuVariants = {
        hidden: { x: "-100%", opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: 0.1,
                delayChildren: 0.2
            },
        },
        exit: {
            x: "-100%",
            opacity: 0,
            transition: { duration: 0.3, ease: "easeInOut" },
        },
    };

    const itemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: { x: 0, opacity: 1 }
    };

    const scrollToSection = (sectionId: string) => {
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
        <motion.header
            className={`fixed mx-auto left-0 right-0 z-50 py-2.5 px-4 lg:px-4 transition-all duration-300 ${scrolled ? 'backdrop-blur-md' : 'backdrop-blur-none'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <div className="flex items-center gap-x-10 xl:gap-x-16">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href="/">
                            <Image
                                unoptimized
                                src={"/logo.webp"}
                                alt="logo bagheri-dev"
                                width={80}
                                height={50}
                                className="hover:drop-shadow-[0_0_10px_rgba(18,234,234,0.5)] transition-all duration-300"
                            />
                        </Link>
                    </motion.div>

                    <nav className="hidden lg:block">
                        <ul className="flex items-center lg:gap-x-10 xl:gap-x-12 py-6">
                            {menu.map((item) => (
                                <motion.li
                                    key={item.id}
                                    className="relative transition-colors hover:text-[#12EAEA] cursor-pointer text-lg group"
                                    onClick={() => scrollToSection(item.src)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="text-[#12EAEA]">{item.id}.</span>
                                    {item.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#12EAEA] group-hover:w-full transition-all duration-300"></span>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-x-8">
                    <div className="hidden lg:flex items-center gap-x-6 xl:gap-x-8">
                        <ContactMeButton />
                        {/*<ResumeButton />*/}
                    </div>
                    <motion.button
                        className="lg:hidden p-2 rounded-full hover:bg-[#12EAEA]/10"
                        onClick={() => setIsMenuOpen(true)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Menu size={28} className="text-[#12EAEA]" />
                    </motion.button>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/70 z-50 lg:hidden backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.div
                            className="fixed top-0 left-0 h-full w-80 bg-[#0C1B31] z-50 lg:hidden p-6 shadow-2xl"
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <motion.button
                                className="mb-6 p-2 rounded-full hover:bg-[#12EAEA]/10"
                                onClick={() => setIsMenuOpen(false)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <X size={28} className="text-[#12EAEA]" />
                            </motion.button>

                            <motion.ul className="flex flex-col gap-y-8 text-lg">
                                {menu.map((item, index) => (
                                    <motion.li
                                        key={item.id}
                                        className="transition-colors hover:text-[#12EAEA] cursor-pointer py-2"
                                        onClick={() => {
                                            scrollToSection(item.src);
                                            setIsMenuOpen(false);
                                        }}
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{
                                            delay: index * 0.1,
                                            type: "spring",
                                            stiffness: 100
                                        }}
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#12EAEA] text-xl">{item.id}.</span>
                                            <span className="relative">
                                                {item.name}
                                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#12EAEA] hover:w-full transition-all duration-500"></span>
                                            </span>
                                        </div>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            <motion.div
                                className="mt-12 flex flex-col gap-y-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <ContactMeButton />
                                {/*<ResumeButton />*/}
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    );
};