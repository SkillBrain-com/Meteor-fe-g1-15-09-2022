function toKelvin(celsius) {
    return celsius + 273.15;
}
function toFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

function TemperatureText({unit, temperatura}){
    if (unit === 'C') {
        return <h1>{temperatura.toFixed(2)} {unit}</h1>;
    }

    if (unit === 'F') {
        return <h1>{toFahrenheit(temperatura).toFixed(2)} {unit}</h1>;
    }

    return <h1>{toKelvin(temperatura).toFixed(2)} {unit}</h1>;
}

export default TemperatureText;