const inputNumar1 = document.querySelector("#inputNumar1");
const inputNumar2 = document.querySelector("#inputNumar2");
const butonClaculeaza = document.querySelector("#butonClaculeaza");
const textRezultat = document.querySelector("#textRezultat");
const errorText = document.querySelector("#errorText");

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

butonClaculeaza.addEventListener("click", function(){
    const input1Data = getInputValue(inputNumar1);
    const input2Data = getInputValue(inputNumar2);

    if (input1Data.error !== null) {
        errorText.innerText = input1Data.error;
    }
    else if (input2Data.error !== null) {
        errorText.innerText = input2Data.error;
    }
    else {
        errorText.innerText = "";
    }

    const rezultat = sum(input1Data.value, input2Data.value);

    textRezultat.innerText = rezultat.toFixed(2);
});