import {TabButton} from "../tab-button/TabButton.tsx";
import {IoMenuOutline} from "react-icons/io5";
import {useNavigate} from "react-router-dom";

export function Header() {
    const navigate = useNavigate();

    return (
        <section className={"flex h-full items-center justify-center"}>
            <article
                className={"flex bg-white bg-opacity-20 h-[80%] w-[99%] text-amber-50 items-center justify-between rounded-3xl shadow-inner shadow-neutral-50"}>
                <section className={"flex items-end gap-5"}>
                    <h1 className={"text-2xl font-bold pl-6 pr-20"}>CrimeCast</h1>
                    <TabButton label={"Serial killers"} onClick={() => navigate('/serial-killers')}></TabButton>
                    <TabButton label={"Unsolved cases"} onClick={() => navigate('/unsolved-cases')}></TabButton>
                </section>
                <span className={"text-2xl font-bold pr-6"}>
                    <IoMenuOutline/>
                </span>
            </article>
        </section>
    )
}