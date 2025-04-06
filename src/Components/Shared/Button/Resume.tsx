import Link from "next/link"

export const ResumeButton = () => {
    return (
        <Link href={"https://drive.usercontent.google.com/download?id=1VUT0_HCAA1cI9On_LiFFzc4UaJWd8VKT&export=download"}>
            <button className="flex items-center gap-x-2 bg-[#12EAEA] hover:text-[#12EAEA] hover:bg-inherit transition-colors border border-[#12EAEA] rounded-[4px] text-[#212121] py-3 px-9 cursor-pointer">
                <p>Resume</p>
            </button>
        </Link>
    )
}