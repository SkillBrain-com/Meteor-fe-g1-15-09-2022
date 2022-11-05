console.log(`Tema 4 - Dictionare`);
console.log(`Cerinta 6`);
// Afisati media preturilor produselor dupa aplicarea reducerilor

let sumPriceAfterDiscount = 0;
let avgPriceAfterDiscount = 0;
for( let i = 0; i < BAZA_DE_DATE.length; i++) {
    const discount = BAZA_DE_DATE[i].procentReducere;
    const discountValue = (BAZA_DE_DATE[i].pret * BAZA_DE_DATE[i].procentReducere) / 100;
    const PriceAfterDiscount = BAZA_DE_DATE[i].pret - discountValue;
    sumPriceAfterDiscount += PriceAfterDiscount;
    avgPriceAfterDiscount = sumPriceAfterDiscount / BAZA_DE_DATE.length;

}
// console.log(sumPriceAfterDiscount);
console.log(`Media preturilor produselor dupa aplicarea reducerilor este de ${avgPriceAfterDiscount}.`);