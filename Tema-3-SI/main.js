console.log ("Tema 3 - Structura iterativa");

const marcaList = ["BMW", "Audi", "Dacia", "Audi", "Audi", "Dacia", "Dacia", "Dacia", "BMW", "Volkswagen", "Opel", "Mercedes", "BMW", "Volkswagen"];
const modelList = ["Seria 1", "A3", "Spring", "Q5", "A4", "Spring", "Docker", "Logan", "X5", "Golf", "Astra", "E 200", "220i", "Golf"];
const pretCumparareList = [16000, 9000, 17000, 20300, 6000, 8000, 10000, 6000, 35500, 18900, 41000, 22500, 20500, 11590];
const transmisie = ["Automata", "Manuala", "Automata", "Automata", "Automata", "Manuala", "Manuala", "Manuala", "Automata", "Manuala", "Automata", "Automata", "Manuala", "Automata"];

//let minPosition = pretCumparareList.indexOf(6000);
const indexes = pretCumparareList.map((val, idx) => { //pentru Punctul 3 - a
    console.log(`Index of ${val} is ${idx}`);
    return idx;
});

console.log ("Punctul 1");

for (let i = 0; i < marcaList.length; i++) {
    console.log (`${marcaList[i]} ${modelList[i]}`);
}

console.log ("Punctul 2");

let cumpSum = 0;
for ( let i = 0; i < pretCumparareList.length; i++) {
    cumpSum += pretCumparareList[i];    
}
const avgCump = Math.round(cumpSum / pretCumparareList.length);
console.log (`Pretul mediul de cumparare al unei masini este de ${avgCump}`);

console.log ("Punctul 3");

pretCumparareList.sort(function(a,b){return a-b});
let minCump = pretCumparareList[0];
pretCumparareList.sort(function(a,b){return b-a});
let maxCump = pretCumparareList[0];

console.log ( `Pretul minim al unei masini este ${minCump}`);
console.log ( `Pretul maxim al unei masini este ${maxCump}`);

console.log ("Punctul 3 - a")

//console.log (`6000 se gaseste la pozitia ` + minPosition);
console.log (`Masina cu cel mai mic pret de ${minCump} este ${marcaList[4]} ${modelList[4]} si ${marcaList[7]} ${modelList[7]}`);
console.log (`Masina cu cel mai mare pret de ${maxCump} este ${marcaList[10]} ${modelList[10]}`);

console.log ("Punctul 4")

let targetManuala = "Manuala";
let contManuala = 0;
for (transManuala of transmisie) {
    if (transManuala === targetManuala) {
        contManuala++;
    }
};
console.log(`${contManuala} masini au transmisie manuala`);

let targetAutomata = "Automata";
let contAutomata = 0;
for (transmAutomata of transmisie) {
    if (transmAutomata === targetAutomata) {
        contAutomata++;
    }
};
console.log(`${contAutomata} masini au transmisie automata`);
