import { useState } from "react";

function ClicksButton({onClick}){

    return (
        <button onClick={onClick}>Adauga in cos</button>
    );
}

export default ClicksButton;