import {TabButton} from "../tab-button/TabButton.tsx";

export function Header() {

    return (
        <section className={"flex bg-zinc-900 h-full items-center justify-center"}>
            <article
                className={"flex bg-zinc-700 h-[80%] w-[99%] text-amber-50 items-center justify-between rounded-3xl shadow-inner shadow-neutral-50"}>
                <section className={"flex items-end gap-5"}>
                    <h1 className={"text-2xl font-bold pl-6 pr-20"}>CrimeCast</h1>
                    <TabButton label={"Serial killers"} onClick={() => 0}></TabButton>
                    <TabButton label={"Unsolved cases"} onClick={() => 0}></TabButton>
                </section>
                <span className={"text-2xl font-bold pr-6"}>=</span>
            </article>
        </section>
    )
}