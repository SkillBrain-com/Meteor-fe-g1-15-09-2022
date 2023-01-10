import TemperatureText from './TemperatureText';

const temperatureValueMap = {
    'C' : 1,
    'F' : .5556,
    'K' : 1,
};

function Termometru({temperatura, setTemperatura, unit}) {
    function handleIncrementClick() {
        setTemperatura(temperatura + temperatureValueMap[unit]);
    }

    function handleDecrementClick() {
        setTemperatura(temperatura - temperatureValueMap[unit]);
    }

    return (
        <div>
            <TemperatureText temperatura={temperatura} unit={unit}/>
            <button onClick={handleDecrementClick}>
                <h1>-</h1>
            </button>
            <button onClick={handleIncrementClick}>
                <h1>+</h1>
            </button>
        </div>
    );
}

export default Termometru;