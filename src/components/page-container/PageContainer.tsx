import {ReactNode} from "react";

interface PageContainerProps {
    children: ReactNode;
    class: string;
    scroll: boolean
}

export function PageContainer(props: PageContainerProps) {

    return (
        <section className={"flex justify-evenly items-center w-full h-full"}>
            {props.scroll ? (
                <article
                    className={"w-3/5 h-5/6 bg-white bg-opacity-20 rounded-3xl p-3 pt-3 shadow-inner shadow-neutral-50 flex justify-center items-center"}>
                    <section
                        className={"w-[97%] h-full bg-transparent pt-3 pb-3" + props.class}>
                        {props.children}
                    </section>
                </article>
            ) : (
                <article
                    className={"w-3/5 h-5/6 bg-white bg-opacity-20 rounded-3xl p-3 pt-6 shadow-inner shadow-neutral-50 flex justify-center items-center" + props.class}>
                    {props.children}
                </article>
            )}
        </section>
    )
}