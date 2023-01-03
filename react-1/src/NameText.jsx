import { useState } from "react";
import { getElementColorFromClicks } from './utils';

//properties -> props
function NameText(props) {
    const [clicks, setClicks] = useState(0);
    const [message, setMessage] = useState("salut");

    function handleOnInputChange(event) {
        const newMessage = event.target.value;
        setMessage(newMessage);
    };

    const handleOnClick = () => {
        const newClicks = clicks + 1;
        setClicks(newClicks);
    };

    return (
        <div
            className={getElementColorFromClicks(clicks)}
            onClick={handleOnClick}
        >
            <h1>Hello {props.name} {message}</h1>
            <h2>Hello {props.name} {message}</h2>
            <h3>Hello {props.name} {message}</h3>
            <h1>{clicks}</h1>
            <input type="text" onChange={handleOnInputChange} />
        </div>
    )

}

export default NameText;