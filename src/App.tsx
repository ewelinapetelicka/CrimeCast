import {SerialKillersList} from "./modules/serial-killers/pages/SerialKillersList.tsx";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {SerialKillerDetails} from "./modules/serial-killers/pages/SerialKillerDetails.tsx";
import {UnsolvedCasesList} from "./modules/unsolved-cases/pages/UnsolvedCasesList.tsx";
import {AppLayout} from "./AppLayout.tsx";
import {UnsolvedCaseDetails} from "./modules/unsolved-cases/pages/UnsolvedCaseDetails.tsx";

function App() {
    const router = createBrowserRouter([
        {
            path: '',
            element: <AppLayout/>,
            children: [
                {
                    path: "/serial-killers",
                    element: <SerialKillersList/>,
                },
                {
                    path: "/serial-killers/:id",
                    element: <SerialKillerDetails/>,
                },
                {
                    path: "/unsolved-cases",
                    element: <UnsolvedCasesList/>,
                },
                {
                    path: "/unsolved-cases/:id",
                    element: <UnsolvedCaseDetails/>,
                },
            ]
        },
        {
            path: "*",
            element: <Navigate to={"/serial-killers"}/>
        }
    ]);


    return (
        <RouterProvider router={router}/>
    )
}

export default App
