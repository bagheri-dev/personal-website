import Link from "next/link"
import { FaGithub } from "react-icons/fa6"
import { HiStatusOnline } from "react-icons/hi"
import { LuFolderGit2 } from "react-icons/lu"

type Props = {
    title: string;
    description: string;
    tech: Array<string>;
    github: string;
    demo: string;
};

export const CardOtherPortfolio = ({ title, description, tech, github, demo }: Props) => {
    return (
        <div className="border border-[#F9F9F933] shadow-[1px_1px_40px_0px_#4876CE40] rounded-[12px] p-8 max-w-[324px] max-h-[288px] bg-white/5 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-[0_0_40px_#4876CE55]">
            <div className="flex items-center justify-between mb-6">
                <LuFolderGit2 className="size-10 text-[#4876CE]" />
                <div className="flex items-center gap-x-4">
                    {github && (
                        <Link href={github} target="_blank">
                            <FaGithub className="size-5 text-white hover:text-[#4876CE] transition" />
                        </Link>
                    )}
                    {demo && (
                        <Link href={demo} target="_blank">
                            <HiStatusOnline className="size-5 text-white hover:text-[#4876CE] transition" />
                        </Link>
                    )}
                </div>
            </div>

            <div className="mb-3">
                <h4 className="text-xl font-semibold text-white">{title}</h4>
            </div>

            <div className="mb-6">
                <p className="text-sm text-gray-400 line-clamp-3">{description}</p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-[#8DB1FF]">
                {tech.map((item, index) => (
                    <span key={index} className="bg-[#4876CE20] px-2 py-1 rounded-md">{item}</span>
                ))}
            </div>
        </div>
    )
}
