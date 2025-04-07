import Link from "next/link"
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa"

export const Socials = () => {
    return (
        <section id="contact-me" className="bg-[#0f1117] border-t border-white/10 py-12">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                    Let’s Connect
                </h2>
                <p className="text-gray-400 mb-8">
                    Feel free to reach out on any of these platforms.
                </p>

                <div className="flex justify-center gap-6 text-2xl text-white">
                    <Link
                        href="https://github.com/bagheri-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#4876CE] transition-transform transform hover:scale-110"
                    >
                        <FaGithub />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/mahdi-bagheri-dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0A66C2] transition-transform transform hover:scale-110"
                    >
                        <FaLinkedin />
                    </Link>
                    <Link
                        href="https://t.me/bagheri_dev01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0088cc] transition-transform transform hover:scale-110"
                    >
                        <FaTelegram />
                    </Link>
                </div>
            </div>
        </section>
    )
}
