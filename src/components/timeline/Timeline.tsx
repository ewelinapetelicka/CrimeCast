import {GoDotFill} from "react-icons/go";

export interface TimeLineCard {
    date: string | number;
    title: string;
    description?: string;
}

interface TimelineProps {
    cards: TimeLineCard[];
}

export function Timeline(props: TimelineProps) {
    return (
        <div className={"text-neutral-50 pb-3 pt-3"}>
            {props.cards.map((card, index) => {
                return (
                    <section className={"border-l-fuchsia-700 h-20 flex gap-2"}>
                        <div className={"flex flex-col items-center justify-center gap-2"}>
                            <GoDotFill size={"22px"}/>
                            {index === props.cards.length - 1 ?
                                (<div className={"h-10 border-0"}></div>)
                                : (<div className={"h-10 border-2"}></div>)}
                        </div>
                        <div className={"flex items-start justify-center gap-2 pt-1"}>
                            <span>{card.date}</span>
                            <span>{card.title}</span>
                            <span>{card.description}</span>
                        </div>
                    </section>
                )

            })}
        </div>
    )
}