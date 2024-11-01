import {SerialKiller} from "../../models/serial-killer.ts";

interface KillersTableProps {
    killers: SerialKiller[]
}

export function KillersTable(props: KillersTableProps) {
    return (
        <table className={"h-5/6 w-full p-6"}>
            <thead
                className={"text-left bg-zinc-700 rounded-2xl shadow-inner shadow-neutral-50 text-amber-50"}>
            <tr>
                <th className={"pl-4 p-2"}>Name</th>
                <th>Alias</th>
                <th>Country</th>
            </tr>
            </thead>
            <tbody>
            {props.killers.map((killer) => {
                return (
                    <>
                        <tr>
                            <td className={"pl-4 text-neutral-50"}>{killer.name}</td>
                            <td className={"text-neutral-300"}>{killer.alias}</td>
                            <td className={"text-neutral-300"}>{killer.country}</td>
                        </tr>
                    </>
                )
            })}
            </tbody>
        </table>
    )
}