import {IoCloseOutline, IoSearchOutline} from "react-icons/io5";

interface SearchProps {
    onChange: (query: string) => void;
    value: string;
    onClick?: () => void;
}

export function Search(props: SearchProps) {
    return (
        <section className={"w-full flex justify-end relative"}>
            <input type="text"
                   placeholder={"search..."}
                   onChange={(event) => props.onChange(event.target.value)}
                   value={props.value}
                   className={"bg-white bg-opacity-20 p-2 rounded-2xl shadow-inner shadow-neutral-50 text-amber-50 pr-7"}/>
            {!props.value ?
                <IoSearchOutline className={"absolute right-0 mt-2 mr-4 text-neutral-100"} size={24}/>
                :
                <IoCloseOutline className={"absolute right-0 mt-2 mr-4 text-neutral-100 hover:cursor-pointer"} size={24}
                                onClick={() => props.onClick && props.onClick()}/>
            }
        </section>
    )
}