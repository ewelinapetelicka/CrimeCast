import {createContext} from "react";

export const ThemeContext = createContext<any>({
    value: "dark",
    setValue: () => {
    }
})