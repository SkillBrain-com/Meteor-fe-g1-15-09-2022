import { useState, useEffect } from "react";

function getNamesFromAPI(){
    //...fetch

    return [
        "Ivan",
        "George",
        "Nicoleta",
        "Vladimir"
    ];
}

function Dashboard (){
    const [names, setNames] = useState([]);

    useEffect(() => {
        console.log("Mount Dashboard");
        const apiNames = getNamesFromAPI();
        setNames(apiNames);

        return () => {
            console.log("Unmount Dashboard");
        }
    }, []);

    return (
        <div>
            {names.map((name, index) => <h1 key={index}>{name}</h1>)}
        </div>
    )
}

export default Dashboard;