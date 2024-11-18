import {IoClose} from "react-icons/io5";
import button from "../../../../styles/Button.ts";

interface MapProps {
    onCloseClick: () => void;
}

export function Map(props: MapProps) {
    return (
        <div className={"text-neutral-50 pb-3 pt-3 w-full relative"}>
            <button className={button.close} onClick={() => props.onCloseClick()}>
                <IoClose/>
            </button>
        </div>
    )
}