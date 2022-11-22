console.log("Exercitiul 4");
const carTransmision = ["Automata","Manuala","Automata","Automata","Automata","Manuala","Manuala","Manuala","Automata","Manuala","Automata","Automata","Manuala","Automata"];
let manualTrans = 0;
let automaticTrans = 0;
let i = 0;
for (let i = 0; i < carTransmision.length; i ++) {
    if (carTransmision[i] === "Automata") {
    automaticTrans +=1;
    }
    if (carTransmision[i] === "Manuala") {
    manualTrans +=1;
    }
}
 console.log(`Cu Transmisie manuala sunt: ${manualTrans} masini, iar cu transmisie automata sunt: ${automaticTrans} masini.`)

 console.log("Exercitiul 4 extra");

 console.log("Cu transmisie manuala avem urmatoarele modele:");

 for (let i = 0; i < carTransmision.length; i ++) {
    if (carTransmision[i] === "Manuala") {
        console.log(`${carName[i]} ${carModel[i]} `);
    }
 }

 console.log("Cu Transmisie automata avem urmatoarele modele:");

 for (let i = 0; i < carTransmision.length; i++) {
    if(carTransmision[i] === "Automata") {
        console.log(`${carName[i]} ${carModel[i]}`);
    }
 }