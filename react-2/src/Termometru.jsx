// f = c * 1.8 + 32 
// k = c + 273.15
function toKelvin(celsius) {
    return celsius + 273.15;
}
function toFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

function Termometru(props) {
    

    return (
        <div>
            {props.unit === 'C' && <h1>{props.temperatura.toFixed(2)} {props.unit}</h1>}
            {props.unit === 'K' && <h1>{toKelvin(props.temperatura).toFixed(2)} {props.unit}</h1>}
            {props.unit === 'F' && <h1>{toFahrenheit(props.temperatura).toFixed(2)} {props.unit}</h1>}
            {/* <button onClick={handleDecrementClick}>
                <h1>-</h1>
            </button>
            <button onClick={handleIncrementClick}>
                <h1>+</h1>
            </button> */}
        </div>
    );
}

export default Termometru;