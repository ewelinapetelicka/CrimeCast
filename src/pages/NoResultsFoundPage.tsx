import {LuSearchX} from "react-icons/lu";

export function NoResultsFoundPage() {
    return (
        <section className={'flex text-neutral-50 items-center justify-center bg-zinc-700 w-full h-4/5'}>
            <LuSearchX className={'text-8xl'}/>
            <p className={'uppercase font-bold'}>no results found</p>
        </section>
    )
}