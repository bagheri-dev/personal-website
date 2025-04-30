import { AccordionContent, AccordionItem, AccordionTrigger } from "@/Components/ui/accordion"


type Props = {
    item : number,
    questions : string,
    answer : string
}

export const CardAccordion = (props : Props) => {
    return (
        <div>
            <AccordionItem value={`item-${props.item}`} className="bg-white/20 rounded-xl px-2 py-1">
                <AccordionTrigger className="text-lg lg:text-xl">{props.questions}</AccordionTrigger>
                <AccordionContent className="text-sm lg:text-lg">
                    {props.answer}
                </AccordionContent>
            </AccordionItem>
        </div>
    )
}