import Image from "next/image"
import { SiteContainer } from "../Shared/SiteContainer"
import Link from "next/link"

const workHistory = [
    {
        company: "Tenetup",
        title: "Frontend Developer",
        date: "3 projects",
        description: "At Tenetup, I contributed to the frontend development of four projects. During my time there, I significantly improved my teamwork and professional work ethic, while gaining valuable hands-on experience. One of the completed projects is bittsi.com, developed in collaboration with my amazing teammates. The remaining three projects are not yet live, but I will share the links as soon as they are launched.",
        tech: ["React", "TypeScript", "Tailwind", "NextJs"],
        linkedin: "https://www.linkedin.com/company/tenetup/"
    },
]

export const Work = () => {
    return (
        <div id="experience" className="pb-8 lg:pb-[160px]">
            <SiteContainer>
                <div>
                    <div className="flex items-end gap-x-2 pb-10">
                        <Image className="w-10 lg:w-[54px]" src={"/2.svg"} alt="icon 1" width={54} height={82} />
                        <div className="flex items-center gap-x-2 overflow-hidden">
                            <h2 className="text-lg lg:text-[32px] font-semibold text-white text-nowrap">Where I’ve worked</h2>
                            <div className="bg-[#4876CE] w-[150px] xl:w-[417px] h-0.5"></div>
                        </div>
                    </div>

                    <div className="relative lg:border-l-2 border-[#4876CE]/30 lg:ml-4 lg:pl-6 space-y-12">
                        {workHistory.map((job, index) => (
                            <div key={index} className="relative">
                                <div className="absolute z-10 -left-3 top-1 w-6 h-6 bg-[#4876CE] rounded-full border-4 border-[#0f1117] shadow-md"></div>

                                <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_8px_32px_0_rgba(72,118,206,0.2)] hover:border-[#4876CE]">
                                    <div className="flex justify-between items-center flex-wrap lg:flex-nowrap gap-2 mb-2">
                                        <h3 className="text-lg lg:text-xl font-semibold text-white">{job.title}</h3>
                                        <span className="text-xs lg:text-sm text-gray-400">{job.date}</span>
                                    </div>

                                    <Link target="_blank" href={job.linkedin}><p className="text-[#87a2c7] font-medium mb-1 underline">{job.company}</p></Link>

                                    <p className="text-gray-400 mb-3">{job.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {job.tech.map((tag, i) => (
                                            <span key={i} className="bg-[#1d2233] text-[#9ab7ff] text-xs font-medium px-3 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SiteContainer>
        </div>
    )
}
