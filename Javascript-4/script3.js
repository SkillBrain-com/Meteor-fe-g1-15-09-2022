console.log("Exercitiul 3");

let count = 0;

for (let i=0; i<BAZA_DE_DATE.length; i++) {
    const imbracaminte = BAZA_DE_DATE[i];
    const {dimensiuni, culori} = imbracaminte;
    if ((dimensiuni.length < 4) &&
         (culori.includes("ROSU") ||
         culori.includes("VERDE")) ){
          count++; 
         }
   
}

console.log(`${count} articole sunt disponibile in cel mult 3 dimensiuni, culoarea verde sau culoarea rosie`);