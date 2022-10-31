console.log ("Tema 3 - Structura iterativa");

const marcaList = ["BMW", "Audi", "Dacia", "Audi", "Audi", "Dacia", "Dacia", "Dacia", "BMW", "Volkswagen", "Opel", "Mercedes", "BMW", "Volkswagen"];
const modelList = ["Seria 1", "A3", "Spring", "Q5", "A4", "Spring", "Docker", "Logan", "X5", "Golf", "Astra", "E 200", "220i", "Golf"];

console.log ("Punctul 1");
for (let i = 0; i < marcaList.length; i++) {
    console.log (`${marcaList[i]} ${modelList[i]}`);
}
