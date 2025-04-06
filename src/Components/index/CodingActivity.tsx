import Image from "next/image"
import { SiteContainer } from "../Shared/SiteContainer"

export const CodingActivity = () => {
    return (
        <div className="pb-8 lg:pb-[160px]">
            <SiteContainer>
                <div className="flex items-end gap-x-2 pb-10">
                    <Image className="w-10 lg:w-[54px]" src={"/4.svg"} alt="icon 4" width={54} height={82} />
                    <div className="flex items-center gap-x-2 overflow-hidden">
                        <h2 className="text-lg lg:text-[32px] font-semibold text-white text-nowrap">Coding Activity</h2>
                        <div className="bg-[#4876CE] w-[150px] xl:w-[417px] h-0.5"></div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image unoptimized src={"https://github-readme-activity-graph.vercel.app/graph?username=bagheri-dev&theme=react-dark"} alt="GitHub Coding Activity" width={1200} height={420} />
                </div>
                <div className="flex justify-center items-center gap-10 pt-5 flex-wrap">
                    <Image unoptimized src={"https://github-readme-stats.vercel.app/api?username=bagheri-dev&show_icons=true&theme=transparent"} alt="GitHub Coding Activity" width={520} height={420} />
                    <Image unoptimized src={"https://github-readme-stats.vercel.app/api/top-langs/?username=bagheri-dev&layout=donut"} alt="GitHub Coding Activity" width={420} height={420} />
                </div>
            </SiteContainer>
        </div>
    )
}