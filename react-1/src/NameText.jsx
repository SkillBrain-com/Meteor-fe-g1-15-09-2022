import { useState } from "react";

//properties -> props
function NameText(props){
    const [clicks, setClicks] = useState(0);

    const handleOnClick = () => {
        const newClicks = clicks + 1;
        setClicks(newClicks);
    };

    return (
        <div onClick={handleOnClick}>
            <h1>Hello {props.name}</h1>
            <h2>Hello {props.name}</h2>
            <h3>Hello {props.name}</h3>
            <h1>{clicks}</h1>
        </div>
    )
}

export default NameText;