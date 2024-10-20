import {ReactNode} from "react";

interface PropsPageContainer {
    children: ReactNode
}

export function PageContainer(props: PropsPageContainer) {
    return (
        <section className={"flex justify-center items-center bg-zinc-900 w-full h-full"}>
            <article className={"w-3/5 h-5/6 bg-zinc-700 rounded-3xl p-3 shadow-inner shadow-neutral-50"}>
                {props.children}
            </article>
        </section>
    )
}