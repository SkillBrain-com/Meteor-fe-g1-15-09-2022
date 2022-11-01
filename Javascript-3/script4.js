const transmisie = ["Automata", "Manuala", "Automata", "Automata", "Automata", "Manuala", "Manuala", "Manuala", "Automata", "Manuala", "Automata", "Automata", "Manuala", "Automata"];
const Marca = ["BMW", "Audi", "Dacia", "Audi", "Audi", "Dacia", "Dacia", "Dacia", "BMW", "Volkswagen", "Opel", "Mercedes", "BMW", "Volkswagen"];
const Model = ["Seria 1", "A3", "Spring", "Q5", "A4", "Spring", "Docker", "Logan", "X5", "Golf", "Astra", "E 200", "220i", "Golf"];

let countAutomat = 0;
let countManual = 0;

for (let i=0; i<transmisie.length; i++) {
    if ( transmisie[i] === "Manuala") {
        countManual++;
        console.log(`Masina ${Marca[i]} ${Model[i]} are transmisie ${transmisie[i]}`);
    }
    else {
        countAutomat++;
        console.log(`Masina ${Marca[i]} ${Model[i]} are transmisie ${transmisie[i]}`);
    }
}

console.log(`Numarul masinilor cu transmisie manuala este ${countManual} si numarul manisilor cu transmisie automata este ${countAutomat}`)
