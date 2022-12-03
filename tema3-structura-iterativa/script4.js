// start IIFE
(function () {

    console.log(`exercitiul3-4`);

const marca = ["BMW", "Audi", "Dacia", "Audi", "Audi", "Dacia", "Dacia", "Dacia", "BMW", "Volkswagen", "Opel", "Mercedes", "BMW", "Volkswagen"];
const model = ["Seria 1", "A3", "Spring", "Q5", "A4", "Spring", "Docker", "Logan", "X5", "Golf", "Astra", "E200", "220i", "Golf"];
const transmisie = ["Automata", "Manuala", "Automata", "Automata", "Automata", "Manuala", "Manuala", "Manuala", "Automata", "Manuala", "Automata"];

let countAutomata = 0;
let countManuala = 0;
let textMasiniAutomate = "";
let textMasiniManuale = "";

for (let i = 0; i < marca.length; i++) {
    if (transmisie[i] === "Automata") {
        countAutomata++;
        textMasiniAutomate += `${marca[i]} ${model[i]};`;
    } else {
        countManuala++;
        textMasiniManuale += `${marca[i]} ${model[i]};`;
    }
}

console.log(`${countAutomata}masini au cutie automata: ${textMasiniAutomate}`);
console.log(`${countManuala} masini au cutie manuala: ${textMasiniManuale}`);



})()