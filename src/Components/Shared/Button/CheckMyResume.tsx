"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export const CheckMyResume = () => {
    return (
        <Link href={"https://drive.usercontent.google.com/download?id=1VUT0_HCAA1cI9On_LiFFzc4UaJWd8VKT&export=download"}>
            <motion.button
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 25px #4876CE",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-lg lg:text-2xl font-semibold text-[#4876CE] rounded-[12px] py-2 lg:py-4 px-3 lg:px-6 border border-[#4876CE] cursor-pointer lg:shadow-[1px_1px_20px_-1px_#4876CE]"
            >
                Check my resume
            </motion.button>
        </Link>
    )
}
