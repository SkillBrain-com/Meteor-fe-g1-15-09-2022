console.log("Exercitiul 4")

const transmisieList=["Automata", "Manuala", "Automata", "Automata", "Automata", "Manuala", 
"Manuala", "Manuala", "Automata", "Manuala", "Automata", "Automata", "Manuala", "Automata"];
const marcaList1= ["BMW", "Audi", "Dacia", "Audi", "Audi", "Dacia", "Dacia", "Dacia", "BMW", "Volkswagen", "Opel", "Mercedes", "BMW", "Volkswagen"]
let transmisieAutomata= 0;
let transmisieManuala=0;

for( let i= 0; i < transmisieList.length; i++) {
    if ( transmisieList[i]=== "Automata")
    transmisieAutomata++ ; 

    if (transmisieList[i]=== "Manuala");
    transmisieManuala++ 
}

console.log(`Masini cu transmisie automata sunt ${transmisieAutomata} iar cu transmisie manuala ${transmisieManuala}`);





