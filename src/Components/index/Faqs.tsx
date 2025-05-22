import FaqsIcon from "../Shared/FaqsIcon"
import { SiteContainer } from "../Shared/SiteContainer"
import { Accordion } from "../ui/accordion"
import { CardAccordion } from "./Card/CardAccordion"

const faqData = [
    {
        questions: "Will my website stand out from the competition?",
        answer: "Absolutely! I craft visually stunning, user-centric websites using modern tools like Tailwind CSS and Next.js, ensuring your brand shines with a unique, engaging design that captivates your audience and drives results."
    },
    {
        questions: "How fast can you deliver a high-quality website?",
        answer: "Speed meets excellence in my workflow. By leveraging efficient frameworks like React and Next.js, I deliver pixel-perfect, fully responsive websites in record time—without cutting corners. Let’s discuss your timeline!"
    },
    {
        questions: "Can you handle both design and development for my project?",
        answer: "Yes, I’m your one-stop solution! From crafting intuitive UI designs to coding seamless front-end experiences, I combine creativity and technical expertise to bring your vision to life with precision and flair."
    },
    {
        questions: "How do you ensure my website performs well and ranks high?",
        answer: "Performance is my priority. I optimize every site for lightning-fast load times, SEO, and accessibility, ensuring your website not only ranks higher but also keeps users coming back for more."
    },
    {
        questions: "What makes you different from other developers?",
        answer: "Unlike others who rely on generic templates, I create tailored, high-performance websites with a focus on clean code, modern design, and your unique business goals. My passion for excellence sets me apart."
    },
    {
        questions: "Can I see your previous work to trust your skills?",
        answer: "Of course! Explore my portfolio to see real-world projects that showcase my ability to deliver responsive, user-friendly websites. Let my work speak for itself—your dream site is next!"
    },
    {
        questions: "How do we collaborate to bring my vision to life?",
        answer: "It starts with you. I listen to your goals, design a custom UI, develop a robust front-end, and rigorously test for flawless performance. Together, we’ll transform your idea into a website that wows."
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