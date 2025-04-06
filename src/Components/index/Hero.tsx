import Link from "next/link"
import { CheckMyResume } from "../Shared/Button/CheckMyResume"
import { SiteContainer } from "../Shared/SiteContainer"
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6"

export const Hero = () => {
    return (
        <div className="relative pt-3 lg:pt-6">
            <div className="hidden absolute bottom-0 right-0 xl:flex flex-col gap-28 items-center">
                <p className="-rotate-90 text-[#7E7E7E]">bagheri.develop@gmail.com</p>
                <span className="w-0.5 h-20 bg-[#7E7E7E]"></span>
            </div>
            <div className="hidden absolute bottom-0 left-20 xl:flex flex-col gap-5 items-center">
                <Link target="_blank" href={"https://github.com/bagheri-dev"}><FaGithub /></Link>
                <Link target="_blank" href={"https://www.linkedin.com/in/mahdi-bagheri-dev/"}><FaLinkedin /></Link>
                <Link target="_blank" href={"https://t.me/bagheri_dev01"}><FaTelegram /></Link>
                <span className="w-0.5 h-20 bg-[#7E7E7E]"></span>
            </div>
            <SiteContainer>
                <div>
                    <p className="text-sm lg:text-[28px] text-[#12EAEA] my-2 lg:my-0">Hi,  My name is</p>
                    <h1 className="text-[22px] lg:text-[88px] font-bold">Mahdi Bagheri</h1>
                    <p className="text-[32px] lg:text-[65px] font-bold text-[#7E7E7E] lg:text-white">Software engineering | Frontend Developer</p>
                    <p className="text-sm lg:text-[28px] text-[#7E7E7E]">I’m a Front-End developer specializing in building single page web applications.</p>
                </div>
                <div className="pt-8 lg:pt-16">
                    <CheckMyResume/>
                </div>
            </SiteContainer>
        </div>
    )
}