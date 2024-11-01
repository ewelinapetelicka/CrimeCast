import {SerialKillersList} from "./modules/serial-killers/pages/SerialKillersList.tsx";
import {Header} from "./components/header/Header.tsx";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";

function App() {
    //const [theme, setTheme] = useState("dark")
    const router = createBrowserRouter([
        {
            path: "/serial-killers-list",
            element: <SerialKillersList/>,
        },
        {
            path: "*",
            element: <Navigate to={"/serial-killers-list"}/>
        }
    ]);

    return (
        /*
                <ThemeContext.Provider value={{value: theme, setValue: setTheme}}>
        */
        <div className={"h-screen"}>
            <div className={"h-[10%]"}>
                <Header></Header>
            </div>
            <div className={"h-[90%] overflow-auto"}>
                <RouterProvider router={router}/>
            </div>
        </div>
    )
}

export default App
