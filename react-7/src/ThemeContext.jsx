import {createContext} from "react";

const ThemeContext = createContext({
    theme: "light",
    setTheme: () => undefined
});

export const ThemeProvider = ThemeContext.Provider;

export default ThemeContext;