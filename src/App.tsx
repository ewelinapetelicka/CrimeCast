import {SerialKillersList} from "./modules/serial-killers/pages/SerialKillersList.tsx";
import {Header} from "./components/header/Header.tsx";

function App() {

    return (
        <div className={"h-screen"}>
            <div className={"h-[10%]"}>
                <Header></Header>
            </div>
            <div className={"h-[90%] overflow-auto"}>
                <SerialKillersList/>
            </div>
        </div>
    )
}

export default App
