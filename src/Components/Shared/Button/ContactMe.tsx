"use client"
import { motion } from "framer-motion";
import Link from "next/link";

export const ContactMeButton = () => {
    return (
        <Link href={"https://wa.me/+989361623262"} target="_blank">
            <motion.button
                className="relative py-3 px-8 rounded-xl cursor-pointer overflow-hidden group"
                initial={{ boxShadow: "0 0 0 0 rgba(18, 234, 234, 0.4)" }}
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px 5px rgba(18, 234, 234, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    duration: 0.3
                }}
            >
                <span className="relative z-10 flex items-center gap-2 text-lg font-semibold text-[#12EAEA]">
                    <motion.span
                        animate={{
                            rotate: [0, 10, -10, 0],
                            transition: {
                                repeat: Infinity,
                                repeatType: "reverse",
                                duration: 1.5
                            }
                        }}
                    >
                        👋
                    </motion.span>
                    Talk To Me
                </span>

                <motion.span
                    className="absolute inset-0 bg-[#12EAEA]/10 border border-[#12EAEA] rounded-xl"
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: [0.8, 1, 0.8],
                        transition: {
                            repeat: Infinity,
                            duration: 3
                        }
                    }}
                />

                <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#12EAEA]/30 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 1.2, ease: "linear" }}
                />

                <motion.span
                    className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-[#12EAEA]"
                    animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 0.8, 0.3],
                        transition: {
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut"
                        }
                    }}
                />
                <motion.span
                    className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#12EAEA]"
                    animate={{
                        y: [0, 10, 0],
                        opacity: [0.3, 0.8, 0.3],
                        transition: {
                            repeat: Infinity,
                            duration: 2.5,
                            ease: "easeInOut",
                            delay: 0.5
                        }
                    }}
                />
            </motion.button>
        </Link>
    );
};