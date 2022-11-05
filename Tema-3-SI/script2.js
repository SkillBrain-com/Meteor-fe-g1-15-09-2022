console.log ("Punctul 4");

const transmisieList = ["Automata", "Manuala", "Automata", "Automata", "Automata", "Manuala", "Manuala", "Manuala", "Automata", "Manuala", "Automata", "Automata", "Manuala", "Automata"];

let contorManual = 0;
let contorAutomat = 0;

for (const transmisie of transmisieList) {
  if (transmisie === "Manuala"){
    contorManual++;
  }
  if (transmisie === "Automata"){
    contorAutomat++;
  }
}
console.log(`${contorAutomat} masini au transmisie automata si ${contorManual} masini au transmisie manuala`);

console.log ("Punctul 4 - a");

for(let i = 0; i<transmisieList.length; i++) {
    console.log (`${marcaList[i]} ${modelList[i]} are transmisie ${transmisieList[i]}`);
}