import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Button(){
    const theme = useContext(ThemeContext);

    return (
        <button 
            className={`btn ${theme === "light" ? "btn-light" : "btn-dark"}`}
        >
            {theme === "light" ? "Make it night" : "Make it day"}
        </button>
    )
}

export default Button;