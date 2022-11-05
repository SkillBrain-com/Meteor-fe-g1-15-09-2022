console.log(`Tema 4 - Dictionare`);
console.log(`Cerinta 1`);
// Afisati numele primelor 20 de articole din baza de date.

let first20Clothes = 0;
for (i = 0; i < BAZA_DE_DATE.length; i++) {
    const first20Clothes = BAZA_DE_DATE[i].nume;
    if(i < 20) {
        console.log(first20Clothes);
    }
}