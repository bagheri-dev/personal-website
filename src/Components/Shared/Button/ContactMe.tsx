"use client"
import { motion } from "framer-motion";
import Link from "next/link";

export const ContactMeButton = () => {
    return (
        <Link href={"tel:09153405360"}>
            <motion.button
                className="py-3 px-6 border border-[#12EAEA] rounded-[4px] cursorpo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                Contact me
            </motion.button>
        </Link>
    );
};