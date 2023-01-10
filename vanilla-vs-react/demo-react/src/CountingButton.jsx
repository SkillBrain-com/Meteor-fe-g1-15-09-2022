import { useState } from "react";

function CountingButton() {
    const [count, setCount] = useState(0);

    const handleOnClick = () => {
        setCount(count + 1);
    };

    return (
        <button
            className="bg-orange-500 hover:bg-orange-100 text-white hover:text-black p-1 drop-shadow-lg rounded-full w-8 h-8 flex justify-center align-center"
            onClick={handleOnClick}
        >
            <span>{count}</span>
        </button>
    );
}

export default CountingButton;