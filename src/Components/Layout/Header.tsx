"use client"
import Image from "next/image";
import { ContactMeButton } from "../Shared/Button/ContactMe";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const menu = [
    { id: 1, name: "About Me", src: "#about-me" },
    { id: 2, name: "Projects", src: "#projects" },
    { id: 3, name: "Advantages", src: "#advantages" },
    { id: 4, name: "FAQ", src: "#faq" },
    { id: 5, name: "Contact Me", src: "#contact-me" },
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
                duration: 0.4,
                ease: "easeOut",
                staggerChildren: 0.1,
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
        visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
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
            setIsMenuOpen(false);
        }
    };

    return (
        <motion.header
            className={`fixed left-0 right-0 z-50 py-3 px-4 lg:px-6 transition-all duration-300 ${scrolled ? 'backdrop-blur-md ' : 'backdrop-blur-none bg-transparent'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <div className="flex items-center gap-x-8 lg:gap-x-12">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href="/" aria-label="Home">
                            <Image
                                unoptimized
                                src={"/logo.webp"}
                                alt="Logo Bagheri Dev"
                                width={80}
                                height={50}
                                className="hover:drop-shadow-[0_0_12px_rgba(18,234,234,0.6)] transition-all duration-300"
                            />
                        </Link>
                    </motion.div>

                    <nav className="hidden lg:block">
                        <ul className="flex items-center gap-x-8 lg:gap-x-10 py-4">
                            {menu.map((item) => (
                                <motion.li
                                    key={item.id}
                                    className="relative text-lg font-medium text-white hover:text-[#12EAEA] cursor-pointer group transition-colors duration-300"
                                    onClick={() => scrollToSection(item.src)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    role="menuitem"
                                    aria-label={item.name}
                                >
                                    <span className="text-[#12EAEA] mr-1">{item.id}.</span>
                                    {item.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#12EAEA] group-hover:w-full transition-all duration-300"></span>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-x-6">
                    <div className="hidden lg:flex items-center gap-x-6">
                        <ContactMeButton />
                        {/*<ResumeButton />*/}
                    </div>
                    <motion.button
                        className="lg:hidden p-2.5 rounded-full bg-[#12EAEA]/10 hover:bg-[#12EAEA]/20 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(true)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Open menu"
                    >
                        <Menu size={28} className="text-[#12EAEA]" />
                    </motion.button>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            className="fixed top-0 left-0 bottom-0 h-screen bg-black/80 z-40 lg:hidden backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => {
                                if (e.target === e.currentTarget) {
                                    setIsMenuOpen(false);
                                }
                            }}
                        />
                        <motion.div
                            className="fixed top-0 left-0 bottom-0 h-screen w-80 bg-gradient-to-b from-[#0C1B31] to-[#1a2e5c] z-[99] lg:hidden p-6 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <motion.button
                                className="mb-8 p-2 rounded-full bg-[#12EAEA]/10 hover:bg-[#12EAEA]/20 transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Close menu"
                            >
                                <X size={28} className="text-[#12EAEA]" />
                            </motion.button>

                            <motion.ul className="flex flex-col gap-y-6 text-lg">
                                {menu.map((item) => (
                                    <motion.li
                                        key={item.id}
                                        className="relative py-3 px-4 rounded-lg hover:bg-[#12EAEA]/10 transition-all duration-300 cursor-pointer"
                                        onClick={() => scrollToSection(item.src)}
                                        variants={itemVariants}
                                        role="menuitem"
                                        aria-label={item.name}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-[#12EAEA] text-xl font-semibold">{item.id}.</span>
                                            <span className="text-white font-medium hover:text-[#12EAEA] transition-colors duration-300">
                                                {item.name}
                                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#12EAEA] hover:w-full transition-all duration-300"></span>
                                            </span>
                                        </div>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            <motion.div
                                className="mt-12 flex flex-col gap-y-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.3 }}
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