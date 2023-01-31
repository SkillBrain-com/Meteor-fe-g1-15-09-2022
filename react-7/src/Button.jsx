import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Button(){
    const {theme, setTheme} = useContext(ThemeContext);

    function handleThemeButtonClick(){
        if(theme === "light") {
            setTheme("dark");
            return;
        }

        setTheme("light");
    }
    return (
        <button 
            className={`btn ${theme === "light" ? "btn-light" : "btn-dark"}`}
            onClick={handleThemeButtonClick}
        >
            {theme === "light" ? "Make it night" : "Make it day"}
        </button>
    )
}

export default Button;