import Image from "next/image"
import { SiteContainer } from "../Shared/SiteContainer"

export const AboutMe = () => {
    return (
        <div id="about-me" className="pb-8 lg:pb-[160px]">
            <SiteContainer>
                <div className="flex justify-between items-center flex-wrap xl:flex-nowrap">
                    <div className="flex flex-col">
                        <div className="flex items-end gap-x-2 pb-10">
                            <Image className="w-10 lg:w-[54px]" src={"/1.svg"} alt="icon 1" width={54} height={82} />
                            <div className="flex items-center gap-x-2 overflow-hidden">
                                <h2 className="text-lg lg:text-[32px] font-semibold text-nowrap">About Me</h2>
                                <div className="bg-[#4876CE] w-[150px] xl:w-[417px] h-0.5"></div>
                            </div>
                        </div>
                        <div className="pb-4">
                            <p>
                                Hello! I’m Mahdi Bagheri, a front-end designer and developer passionate about crafting seamless and impactful digital experiences that help businesses thrive.

                                In my projects, I combine clean code, modern design, and high performance, focusing on quality, attention to detail, and delivering solutions that meet user needs effectively. Proficient in modern UI design, code optimization, and creative problem-solving, I specialize in creating user-friendly interfaces using technologies like Tailwind CSS, JavaScript, React, and Next.js.

                                Despite limited professional experience, I’ve honed my skills through personal projects, developing responsive websites and optimizing user interfaces to deliver high-quality solutions.

                                If you’re looking to collaborate with an energetic and dedicated individual who can transform your ideas into professional, user-friendly products, I’d be thrilled to work with you. Let’s connect and explore how we can bring your ideas to life with innovative and user-centric solutions!
                            </p>
                        </div>
                        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-y-2 justify-items-center">
                            {[
                                'html', 'css', 'tailwind', 'js', 'ts',
                                'react', 'redux', 'nextjs', 'vite',
                                'bootstrap', 'docker', 'git', 'github',
                                'materialui', 'npm', 'postman'
                            ].map((icon) => (
                                <div key={icon} className="relative w-12 h-12">
                                    <Image
                                        src={`https://skillicons.dev/icons?i=${icon}`}
                                        alt={`${icon} icon`}
                                        fill
                                        className="object-contain"
                                        unoptimized
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full">
                        <Image className="lg:min-w-[527px]" src={"/funny-coding-r1ubgelhk4ffxyrt 2.png"} alt="about me" width={527} height={525} />
                    </div>
                </div>
            </SiteContainer>
        </div>
    )
}