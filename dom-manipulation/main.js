const inputNumar1 = document.querySelector("#inputNumar1");
const inputNumar2 = document.querySelector("#inputNumar2");
const butonClaculeaza = document.querySelector("#butonClaculeaza");
const textRezultat = document.querySelector("#textRezultat");

function sum(a, b) {
    return a + b;
}

function getInputValue(input){
    const inputValue = input.value;
    const safeText = inputValue.replaceAll(",", ".");
    const number = Number(safeText);
    return number;
}

butonClaculeaza.addEventListener("click", function(){
    const numar1 = getInputValue(inputNumar1);
    const numar2 = getInputValue(inputNumar2);

    const rezultat = sum(numar1, numar2);

    textRezultat.innerHTML = rezultat.toFixed(2);
});