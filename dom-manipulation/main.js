const inputNumar1 = document.querySelector("#inputNumar1");
const inputNumar2 = document.querySelector("#inputNumar2");
const butonClaculeaza = document.querySelector("#butonClaculeaza");
const textRezultat = document.querySelector("#textRezultat");
const errorText1 = document.querySelector("#errorText1");
const errorText2 = document.querySelector("#errorText2");
const winText = document.querySelector("#winText");

const secret = Math.round(Math.random() * 20 + 1);

function sum(a, b) {
    return a + b;
}

function getInputValue(input) {
    const inputValue = input.value;

    if (inputValue.length === 0) {
        return {
            error: "Valoarea introdusa nu poate fi goala!",
            value: 0,
        };
    }

    const safeText = inputValue.replaceAll(",", ".");
    const number = Number(safeText);
    const isNumberNaN = isNaN(number);

    if (isNumberNaN === true) {
        return {
            error: "Valorile introduse nu pot contine litere!",
            value: 0,
        };
    }

    return {
        error: null,
        value: number,
    };
}

function renderInputError(inputData, errorTextElement) {
    if (inputData.error !== null) {
        errorTextElement.innerText = inputData.error;
        errorTextElement.classList.add("red-text");
    }
    else {
        errorTextElement.classList.remove("red-text");
        errorTextElement.innerText = "";
    }
}

butonClaculeaza.addEventListener("click", function () {
    const input1Data = getInputValue(inputNumar1);
    const input2Data = getInputValue(inputNumar2);

    renderInputError(input1Data, errorText1);
    renderInputError(input2Data, errorText2);

    const rezultat = sum(input1Data.value, input2Data.value);

    textRezultat.innerText = rezultat.toFixed(0);

    winText.className = "";
    if(rezultat > secret) {
        winText.innerText = "Numarul este prea mare";        
        winText.classList.add("orange-text");
    }
    else if(rezultat < secret){
        winText.innerText = "Numarul este prea mic";
        winText.classList.add("orange-text");
    }
    else{
        winText.innerText = "Ai castigat";
        winText.classList.add("green-text");
    }

});