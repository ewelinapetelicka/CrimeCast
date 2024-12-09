import {Outlet} from "react-router-dom";
import {Header} from "./components/header/Header.tsx";

export function AppLayout() {
    return (
        <div className={"h-screen"}>
            <div className={"h-[10%]"}>
                <Header></Header>
            </div>
            <div className={"h-[90%] overflow-auto"}>
                <Outlet/>
            </div>
        </div>
    )
}