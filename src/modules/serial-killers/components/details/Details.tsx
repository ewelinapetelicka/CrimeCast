import {SerialKiller} from "../../../../models/serial-killer.ts";

interface DetailsProps {
    killer: SerialKiller
}

export function Details(props: DetailsProps) {
    function status(status: string) {
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
        <section className={"w-1/2"}>
            <article className={"flex flex-row gap-2"}>
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
                        <span>{status(props.killer.dead)}</span>
                    </div>
                </div>
            </article>
            <span>{props.killer.bio}</span>
        </section>
    )
}