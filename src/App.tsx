import {SerialKillersList} from "./modules/serial-killers/pages/SerialKillersList.tsx";
import {Header} from "./components/header/Header.tsx";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {SerialKillerDetails} from "./modules/serial-killers/pages/SerialKillerDetails.tsx";

function App() {
    //const [theme, setTheme] = useState("dark")
    const router = createBrowserRouter([
        {
            path: "/serial-killers",
            element: <SerialKillersList/>,
        },
        {
            path: "/serial-killers/:id",
            element: <SerialKillerDetails/>,
        },
        {
            path: "*",
            element: <Navigate to={"/serial-killers"}/>
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
