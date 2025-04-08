import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { HiStatusOnline } from "react-icons/hi";

type Props = {
    title: string;
    image: string;
    description: string;
    tech: Array<string>;
    github: string;
    demo: string;
};

export const CardPorfolioMobile = (props: Props) => {
    const { title, image, description, tech, github, demo } = props;

    return (
        <div
            className={cn(
                "relative bg-cover bg-center border border-[#4876CE] rounded-[12px] shadow-[1px_2px_24px_0px_#4876CE80] overflow-hidden"
            )}
            style={{ backgroundImage: `url(${image})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0C1B31E6] backdrop-blur-sm z-0" />

            {/* Content */}
            <div className="relative z-10 pt-[30px] pb-6 px-4">
                <div className="mb-[42px]">
                    <p className="font-semibold text-[#4876CE]">Featured project</p>
                    <h4 className="text-[32px] text-white">{title}</h4>
                </div>

                <div className="bg-[#081527] p-3 rounded-2xl text-white text-xs mb-4">
                    {description}
                </div>

                <div className="flex items-center gap-x-6 text-xs mb-4 flex-wrap text-white">
                    {tech.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-6 pt-6">
                    <Link href={github} target="_blank" rel="noopener noreferrer">
                        <button className="cursor-pointer flex justify-center items-center gap-x-1 py-2 px-6 border border-[#4876CE] rounded-[8px] text-white text-sm">
                            <FaGithub className="size-6" />
                            GitHub
                        </button>
                    </Link>
                    <Link href={demo} target="_blank" rel="noopener noreferrer">
                        <button className="cursor-pointer flex justify-center items-center gap-x-1 py-2 px-6 border border-[#4876CE] rounded-[8px] text-white text-sm">
                            <HiStatusOnline className="size-6" />
                            Demo
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
