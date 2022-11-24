/** VIEW - SELECTORS */
const textSumaDisponila = document.querySelector("#textSumaDisponila");
const inputSumaRetragere = document.querySelector("#inputSumaRetragere");
const textEroare = document.querySelector("#textEroare");
const butonRetragere = document.querySelector("#butonRetragere");

/** MODEL */
let sumaDisponibila = 500;
let eroare = null;

/** VIEW */

/** VIEW - EVENT LISTENERS */

/** CONTROLLER */

function verificaSumaRetragere(sumaRetrasa, sold) {
    if (sumaRetrasa > sold) {
        return "Suma retrasa nu poate fi mai mare ca soldul";
    }
    
    if (sumaRetrasa < 5) {
        return "Suma retrasa nu poate fi mai mica decat 5 lei";
    }
    
    return null;
}

