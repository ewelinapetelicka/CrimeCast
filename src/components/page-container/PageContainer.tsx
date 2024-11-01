import {ReactNode} from "react";

interface PageContainerProps {
    children: ReactNode
}

export function PageContainer(props: PageContainerProps) {

    return (
        <section className={"flex justify-evenly items-center bg-zinc-900 w-full h-full"}>
            <article
                className={"w-3/5 h-5/6 flex flex-col bg-zinc-700 rounded-3xl p-3 pt-6 shadow-inner shadow-neutral-50 justify-between items-center "}>
                {props.children}
            </article>
        </section>
    )
}