import Image from "next/image"
import { CheckMyResume } from "../Shared/Button/CheckMyResume"
import { SiteContainer } from "../Shared/SiteContainer"

export const Hero = () => {
    return (
        <div className="relative pt-3 lg:pt-6 mb-8 lg:mb-[160px]">
            {/* <div className="hidden absolute bottom-0 right-0 xl:flex flex-col gap-28 items-center">
                <p className="-rotate-90 text-[#7E7E7E]">bagheri.develop@gmail.com</p>
                <span className="w-0.5 h-20 bg-[#7E7E7E]"></span>
            </div>
            <div className="hidden absolute bottom-0 left-20 xl:flex flex-col gap-5 items-center">
                <Link target="_blank" href={"https://github.com/bagheri-dev"}><FaGithub /></Link>
                <Link target="_blank" href={"https://www.linkedin.com/in/mahdi-bagheri-dev/"}><FaLinkedin /></Link>
                <Link target="_blank" href={"https://t.me/bagheri_dev01"}><FaTelegram /></Link>
                <span className="w-0.5 h-20 bg-[#7E7E7E]"></span>
            </div> */}
            <SiteContainer>
                <div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-x-2">
                    <div>
                        <Image src={"/hero-img.webp"} alt="hero image" width={750} height={600} />
                    </div>
                    <div>
                        <div className="space-y-2">
                            <p className="text-sm lg:text-[28px] text-[#12EAEA] my-2 lg:my-0">Hi,  My name is</p>
                            <h1 className="text-[22px] lg:text-5xl font-bold">Mahdi Bagheri</h1>
                            <p className="text-[32px] lg:text-5xl font-bold text-[#7E7E7E] lg:text-white">Software engineering | Frontend Developer</p>
                            <p className="text-sm lg:text-2xl text-[#7E7E7E]">I’m a Front-End developer specializing in building single page web applications.</p>
                        </div>
                        <div className="flex items-center pt-2">
                            <Image src={"/icons/icons8-linkedin-96.png"} alt="linkedin icon" width={40} height={40}/>
                            <p>+800 followers</p>
                        </div>
                        <div className="pt-4 lg:pt-12">
                            <CheckMyResume />
                        </div>
                    </div>
                </div>
            </SiteContainer>
        </div>
    )
}