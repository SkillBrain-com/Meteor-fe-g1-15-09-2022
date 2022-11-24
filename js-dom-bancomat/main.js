/** VIEW - SELECTORS */
const textSumaDisponila = document.querySelector("#textSumaDisponila");
const inputSumaRetragere = document.querySelector("#inputSumaRetragere");
const textEroare = document.querySelector("#textEroare");
const butonRetragere = document.querySelector("#butonRetragere");

function getValueFromInput(inputElement) {
    const text = inputElement.value;
    const parsedNumber = Number(text);

    return parsedNumber;
}

/** MODEL */
let sumaDisponibila;
let eroare;
function setModel(suma, textEroare) {
    sumaDisponibila = suma;
    eroare = textEroare;
}

/**BUSINESS LOGIC */
function verificaSumaRetragere(sumaRetrasa, sold) {
    if (sumaRetrasa > sold) {
        return "Suma retrasa nu poate fi mai mare ca soldul";
    }
    
    if (sumaRetrasa < 5) {
        return "Suma retrasa nu poate fi mai mica decat 5 lei";
    }
    
    return null;
}