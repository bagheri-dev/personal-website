import FaqsIcon from "../Shared/FaqsIcon"
import { SiteContainer } from "../Shared/SiteContainer"
import { Accordion } from "../ui/accordion"
import { CardAccordion } from "./Card/CardAccordion"

const faqData = [
    {
        questions: "Do you only design user interfaces, or do you also develop them?",
        answer: "I do both UI design and front-end development. My work combines modern visual design with clean, efficient code to create smooth and user-friendly digital experiences."
    },
    {
        questions: "What technologies do you use?",
        answer: "I work with modern tools like Tailwind CSS, JavaScript, React, and Next.js to build responsive, high-performance interfaces."
    },
    {
        questions: "Do you have professional work experience?",
        answer: "While I have limited experience in professional environments, I've built and refined my skills through personal projects that focus on quality, responsiveness, and user experience."
    },
    {
        questions: "Can I collaborate with you on a website project?",
        answer: "Absolutely! If you have an idea and need someone to turn it into a professional, user-friendly product, I’d love to collaborate."
    },
    {
        questions: "What does your typical workflow look like for a project?",
        answer: "My process usually includes understanding your needs, designing the UI, developing the front-end, testing responsiveness, and optimizing for speed and usability."
    },
    {
        questions: "Do you take on full projects or just specific parts (like UI design or development)?",
        answer: "I'm open to both! Whether you need a full website or just help with part of it—like UI design or front-end coding—I’m happy to assist."
    },
    {
        questions: "Can I see examples of your work?",
        answer: "Yes! Please visit the portfolio section of my website to see some of my recent projects and get a feel for my style and approach."
    },
]


export const Faqs = () => {
    return (
        <div id="faq" className="pb-24 lg:pb-40">
            <SiteContainer>
                <div className="flex items-center gap-x-2 pb-10">
                    <FaqsIcon />
                    <div className="flex items-center gap-x-2 overflow-hidden">
                        <h2 className="text-lg lg:text-[32px] font-semibold text-white text-nowrap">Frequently Asked Questions (FAQ)</h2>
                        <div className="bg-[#4876CE] w-[150px] xl:w-[417px] h-0.5"></div>
                    </div>
                </div>
                <div>
                    <Accordion type="single" collapsible className="space-y-2">
                        {faqData.map((item , index) => {
                            return <CardAccordion key={index} {...item} item={index} />
                        })}
                    </Accordion>
                </div>
            </SiteContainer>
        </div>
    )
}