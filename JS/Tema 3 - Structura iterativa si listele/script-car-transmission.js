console.log(`Tema 3`);
console.log(`Cerinta 4`);

//4. Urmarind coloana transmisie, creeaza o lista cu acele valori, si un algoritm ce numara cate masini
//au transmisie automata si cate au transmisie manuala.

const carTransmission = ["Automata", "Manuala", "Automata", "Automata", "Automata", "Manuala", "Manuala", "Manuala", "Automata", "Manuala", "Automata", "Automata", "Manuala", "Automata"];

let manualTrasmission = 0;
let automaticTransmission = 0;
let manualContor = 0;
let automaticContor = 0;
for (let i = 0; i < carTransmission.length; i++) {
   const manualTrasmission = carTransmission[i];
   const automaticTransmission = carTransmission[i];
   if(manualTrasmission === "Manuala") {
      manualContor += 1;
   }
   if(automaticTransmission === "Automata") {
      automaticContor += 1; 
   }
}
console.log(`Sunt ${manualContor} masini cu transmisie manuala si ${automaticContor} masini cu transmisie automata.`);