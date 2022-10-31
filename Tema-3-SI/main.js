console.log ("Tema 3 - Structura iterativa");

const marcaList = ["BMW", "Audi", "Dacia", "Audi", "Audi", "Dacia", "Dacia", "Dacia", "BMW", "Volkswagen", "Opel", "Mercedes", "BMW", "Volkswagen"];
const modelList = ["Seria 1", "A3", "Spring", "Q5", "A4", "Spring", "Docker", "Logan", "X5", "Golf", "Astra", "E 200", "220i", "Golf"];
const pretCumparareList = [16000, 9000, 17000, 20300, 6000, 8000, 10000, 6000, 35500, 18900, 41000, 22500, 20500, 11590];

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