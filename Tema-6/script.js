const textSumaDisponibila = document.querySelector("#textSumaDisponibila");
const inputSumaRetragere = document.querySelector("#inputSumaRetragere");
const textEroare = document.querySelector("#textEroare");
const butonRetragere = document.querySelector("#butonRetragere")


let sumaDisponibila;
let eroare;
function setModel(suma, textEroare) {
  sumaDisponibila = suma;
  eroare = textEroare;
}

function setSumaDisponibila(suma) {
  sumaDisponibila = suma;
}
function setEroare(textEroare) {
  eroare = textEroare;
}



function getValueFromInput(inputElement) {
  return inputElement.value;
}

function controllerButonRetragere() {
  const textsumaRetragere = getValueFromInput(inputSumaRetragere)
  const rezultatVerificareText= verificaTextSumaRetragere(textsumaRetragere);
  if (rezultatVerificareText.eroare !== null){
    setModel(sumaDisponibila, rezultatVerificareText.eroare)
    return;
  }

  const sumaRetragere= rezultatVerificareText.value;
  
  const eroareVerificareSuma = verificaSumaRetragere(sumaRetragere, sumaDisponibila);

  if ( eroareVerificareSuma !== null) {
    setModel(sumaDisponibila, eroareVerificareSuma)
  }
  else {
    setModel(sumaDisponibila - sumaRetragere, null);
  }
}


function verificaTextSumaRetragere(textsumaRetragere){
  if (textsumaRetragere.lenght === 0){
    return{
      value: null,
      eroare: "Textul nu poate fi gol"
    };
  }
  const parsedNumber= Number(textsumaRetragere)
  if ( isNaN(parsedNumber)=== true ){
    return {
      value: null,
      eroare: "Textul nu poate contine litere"
    };
}

  return{
    value: parsedNumber,
    eroare: null
  }
}
function verificaSumaRetragere(sumaRetrasa, sold) {


  if (sumaRetrasa > sold) {
    return "Suma retrasa nu poate fi mai mare decat soldul";
  }
  if (sumaRetrasa < 5) {
    return "Suma retrasa nu poate fi mai mica decat 5 lei"; 
  }
return null;
}


function afiseaza() {
  textSumaDisponibila.innerText = (`${sumaDisponibila} RON`);
  if (eroare !== null) {
    textEroare.innerText = eroare;
  }
  else {
    textEroare.innerText= "";
  }
}

butonRetragere.addEventListener("click", function() {
  controllerButonRetragere();
  afiseaza();
})


sumaDisponibila = 500;
eroare = null;
afiseaza()


