import { AccordionContent, AccordionItem, AccordionTrigger } from "@/Components/ui/accordion"


type Props = {
    item : number,
    questions : string,
    answer : string
}

export const CardAccordion = (props : Props) => {
    return (
        <div>
            <AccordionItem value={`item-${props.item}`} className="border border-[#0C1B31] rounded-xl px-2 py-1 space-y-2">
                <AccordionTrigger className="text-lg lg:text-xl cursor-pointer">{props.questions}</AccordionTrigger>
                <AccordionContent className="text-sm lg:text-lg">
                    {props.answer}
                </AccordionContent>
            </AccordionItem>
        </div>
    )
}