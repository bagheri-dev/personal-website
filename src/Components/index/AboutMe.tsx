import Image from "next/image";
import { SiteContainer } from "../Shared/SiteContainer";

export const AboutMe = () => {
    return (
        <div id="about-me" className="pb-8 lg:pb-[160px]">
            <SiteContainer>
                <div className="flex justify-between items-center flex-wrap xl:flex-nowrap">
                    <div className="flex flex-col">
                        <div className="flex items-end gap-x-2 pb-10">
                            <Image
                                className="w-10 lg:w-[54px]"
                                src={"/1.svg"}
                                alt="icon 1"
                                width={54}
                                height={82}
                            />
                            <div className="flex items-center gap-x-2 overflow-hidden">
                                <h2 className="text-lg lg:text-[32px] font-semibold text-nowrap">
                                    About Me
                                </h2>
                                <div className="bg-[#4876CE] w-[150px] xl:w-[417px] h-0.5"></div>
                            </div>
                        </div>
                        <div className="pb-4">
                            <p>
                                Hi, I’m Mahdi Bagheri, a passionate front-end designer and
                                developer dedicated to creating seamless, high-impact digital
                                experiences that empower businesses to grow. With a strong focus
                                on clean code, modern design, and optimized performance, I craft
                                user-centric solutions that not only meet but exceed expectations.
                                <br />
                                Specializing in technologies like Tailwind CSS, JavaScript, React,
                                and Next.js, I bring your ideas to life with precision, speed, and
                                flair. Whether it’s optimizing user interfaces or building
                                responsive websites, I combine creativity with technical expertise
                                to deliver polished, professional products.
                                <br />
                                Although my professional experience is limited, my personal
                                projects have refined my skills and enabled me to create
                                responsive, high-quality websites that users love. If you&apos;re
                                looking for a dedicated designer who can transform your vision into
                                a functional, visually stunning product, let&apos;s connect! Together,
                                we can build something exceptional.
                            </p>
                        </div>
                        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-y-2 justify-items-center">
                            {[
                                "html",
                                "css",
                                "tailwind",
                                "js",
                                "ts",
                                "react",
                                "redux",
                                "nextjs",
                                "vite",
                                "bootstrap",
                                "docker",
                                "git",
                                "github",
                                "materialui",
                                "npm",
                                "postman",
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
                        <Image
                            className="lg:min-w-[527px]"
                            src={"/funny-coding.webp"}
                            alt="about me"
                            width={527}
                            height={525}
                        />
                    </div>
                </div>
            </SiteContainer>
        </div>
    );
};
