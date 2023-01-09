
const textSumaDisponibila = document.querySelector("#textSumaDisponibila");
const inputSumaRetragere = document.querySelector("#inputSumaRetargere");
const textEroare = document.querySelector("#textEroare");
const butonRetragere = document.querySelector("#butonRetragere");

let sumaDisponibila = 500;
let eroare = null;
function setModel(suma, textEroare) {
  sumaDisponibila = suma;
  eroare = textEroare;
}

function getValueFromInput(inputElement) {
  const text = inputElement.value;
  const parsedNumber = Number(text);

  return parsedNumber;
}

function controllerButonRetragere() {
  const sumaRetragere = getValueFromInput(inputSumaRetragere);
  const textEroare = verificaSumaRetragere(sumaRetragere, sumaDisponibila);

  if (textEroare !== null) {
    setModel(sumaDisponibila, textEroare);
  } else {
    setModel(sumaDisponibila - sumaRetragere, null);
  }
}

function verificaSumaRetragere(sumaRetrasa, sold) {
  if (sumaRetrasa > sold) {
    return "Suma retrasa nu poate depasi soldul";
  }
  if (sumaRetrasa < 5) {
    return "Suma retrsa nu poate fi mai mica de 5 lei";
  }
  return null;
}

function render() {
  textSumaDisponibila.innerText = `${sumaDisponibila} RON`;
  if (eroare !== null) {
    textEroare.innerText = eroare;
  } else {
    textEroare.innerText = "";
  }
}

butonRetragere.addEventListener("click", function() {
  controllerButonRetragere();
  render();
});

//sumaDisponibila = 500;
//eroare = null;
render();
