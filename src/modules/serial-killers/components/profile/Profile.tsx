import {SerialKiller} from "../../../../models/serial-killer.ts";
import {Timeline} from "../../../../components/timeline/Timeline.tsx";
import {killersToTimelineCardUtils} from "../../utils/killers-to-timeline-card.utils.tsx";
import {useState} from "react";
import {Map} from "../map/Map.tsx";

interface ProfileProps {
    killer: SerialKiller;
}

export type ViewType = "Timeline" | "Map";

export function Profile(props: ProfileProps) {
    const [view, setView] = useState<ViewType>('Timeline');

    function status(status: any) {
        if (status !== null && status !== "Alive") {
            return (
                <div className={"flex flex-col"}>
                    <><span>Die in: </span>
                    <span>{status}</span></>
                    <><span>Cause of death: </span>
                    <span>{status}</span></>
                </div>
            );
        }
        if (status === "Alive") {
            return "Alive";
        } else return "Unknown";
    }

    return (
        <section className={"flex justify-evenly pr-3"}>
            <article className={"text-neutral-50 flex flex-col gap-3 w-1/2"}>
                <section className={"flex flex-row gap-2"}>
                    <img src={props.killer.img} alt={"profile photo"} className={"max-w-40"}/>
                    <div className={'gap-2 flex flex-col'}>
                        <span className={"font-bold text-xl"}>{props.killer.name}</span>
                        {props.killer.alias !== null && (
                            <span>{props.killer.alias}</span>
                        )}
                        <div>
                            <span>born: </span>
                            <span>{props.killer.born}</span>
                            <span> {props.killer.country}</span>
                        </div>
                        <div>
                            <span>status: </span>
                            {status(props.killer.dead)}
                        </div>
                    </div>
                </section>
                <span>{props.killer.bio}</span>
            </article>
            {view === "Timeline" ? (
                <div className={"flex flex-col"}>
                    <button onClick={() => setView("Map")}>see map</button>
                    <Timeline cards={killersToTimelineCardUtils(props.killer)}></Timeline>
                </div>
            ) : (
                <Map onCloseClick={() => setView("Timeline")}/>
            )}
        </section>
    )
}