console.log(`Tema 3`);
console.log(`Cerinta 4`);

//4. Urmarind coloana transmisie, creeaza o lista cu acele valori, si un algoritm ce numara cate masini
//au transmisie automata si cate au transmisie manuala.

const carTransmission = ["Automata", "Manuala", "Automata", "Automata", "Automata", "Manuala", "Manuala", "Manuala", "Automata", "Manuala", "Automata", "Automata", "Manuala", "Automata"];

const manualTransmission = 0;
const automaticTransmission = 0;
for( let i = 0; i < carTransmission.length; i++) {
    if( i === "Manuala") {
    manualTransmission += manualTransmission;
    console.log(manualTransmission);
    }
    else {
    automaticTransmission += automaticTransmission;
    console.log(automaticTransmission);
    }
}