console.log("Exercitiul 4")

const transmisie=["Automata", "Manuala", "Automata", "Automata", "Automata", "Manuala", 
"Manuala", "Manuala", "Automata", "Manuala", "Automata", "Automata", "Manuala", "Automata"];

let transmisieAutomata= 0;
let transmisieManuala=0;

for( let i= 0; i < transmisie.length; i++) {
    if ( transmisie[i]=== "Automata")
    transmisieAutomata++ ; 

    if (transmisie[i]=== "Manuala");
    transmisieManuala++ 
}

console.log(`Masini cu transmisie automata sunt ${transmisieAutomata} iar cu transmisie manuala ${transmisieManuala}`);
