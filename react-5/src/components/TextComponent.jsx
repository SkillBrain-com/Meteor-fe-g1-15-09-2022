import { useState } from "react";

function TextComponent(){
    const [textValue, setTextValue] = useState("");

    const handleOnChange = (e) => setTextValue(e.target.value);

    return (
        <div>
            <input value={textValue} onChange={handleOnChange}></input>
            <h1>{textValue}</h1>
        </div>
    );
}

export default TextComponent;