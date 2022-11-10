const marca = ["BMW", "Audi", "Dacia", "Audi", "Audi", "Dacia", "Dacia", "Dacia", "BMW", "Volkswagen", "Opel", "Mercedes", "BMW", "Volkswagen"];
const model = ["Seria 1", "A3", "Spring", "Q5", "A4", "Spring", "Docker", "Logan", "X5", "Golf", "Astra", "E 200", "220i", "Golf"];
const pretCumparare = [16000, 9000, 17000, 20300, 6000, 8000, 10000, 6000, 35500, 18900, 41000, 22500, 20500, 11590];
const transmisie = ["Automata", "Manuala", "Automata", "Automata", "Automata", "Manuala", "Manuala", "Manuala", "Automata", "Manuala", "Automata", "Automata", "Manuala", "Automata"];

let countAutomata = 0;
let countManuala = 0;
let textMasiniAutomate = "";
let textMasiniManuale = "";

for (let i = 0; i < marca.length; i++) {
    if (transmisie[i] === "Automata") {
        countAutomata++;
        textMasiniAutomate += `${marca[i]} ${model[i]}; `;
    } else {
        countManuala++;
        textMasiniManuale += `${marca[i]} ${model[i]}; `;
    }
}

console.log(`${countAutomata} masini au cutie automata: ${textMasiniAutomate}`);
console.log(`${countManuala} masini au cutie manuala: ${textMasiniManuale}`);