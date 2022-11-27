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
function setModel(suma, textDeEroare) {
  sumaDisponibila = suma;
  eroare = textDeEroare;
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
/** CONTROLLER */
function controllerButonRetragere() {
  const sumaRetragere = getValueFromInput(inputSumaRetragere);
  const textEroare = verificaSumaRetragere(sumaRetragere, sumaDisponibila);
  if (textEroare !== null) {
    setModel(sumaDisponibila, textEroare);
  } else {
    setModel(sumaDisponibila - sumaRetragere, null);
  }
}
/** VIEW */
function afiseaza() {
  textSumaDisponila.innerText = `${sumaDisponibila} RON`;
  if (eroare !== null) {
    textEroare.innerText = eroare;
  } else {
    textEroare.innerText = "";
  }
}

/** VIEW - EVENT LISTENERS */

butonRetragere.addEventListener("click", function () {
  controllerButonRetragere();
  afiseaza();
});

/*INITIALIZARE */
sumaDisponibila = 500;
eroare = null;
afiseaza();
