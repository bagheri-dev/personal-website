import Image from "next/image";
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

export const CardPorfolio = (props: Props) => {
    const { title, image, description, tech, github, demo } = props;

    return (
        <div className="flex items-center justify-between gap-x-2">
            <div className="flex flex-col items-start">
                <p className="text-xl/[64px] text-[#4876CE]">Featured project</p>
                <h3 className="text-5xl text-[#DFDFDF] mb-12">{title}</h3>
                <div className="bg-[#081527] rounded-[8px] p-6 w-full max-w-[740px] mb-4 shadow-[1px_2px_80px_0px_#4876CE33]">
                    <p>{description}</p>
                </div>
                <div className="flex items-center gap-x-[42px] text-xl mb-4 flex-wrap">
                    {tech.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
                <div className="flex items-center gap-6 pt-6">
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
            <div>
                <Image className="rounded-2xl" unoptimized src={image} alt={title} width={730} height={393} />
            </div>
        </div>
    );
};
