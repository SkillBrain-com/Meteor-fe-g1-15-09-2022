console.log(`Tema 4 - Dictionare`);
console.log(`Cerinta 5`);
// Afisati numele, reducerea si pretul redus al articolului cu cea mai mare reducere

let maxDiscount = -Infinity;
for (let i = 0; i < BAZA_DE_DATE.length; i++) {
    const discount = BAZA_DE_DATE[i].procentReducere;
    const discountValue = (BAZA_DE_DATE[i].pret * BAZA_DE_DATE[i].procentReducere) / 100;
    const PriceAfterDiscount = BAZA_DE_DATE[i].pret - discountValue;
    if(discount > maxDiscount) {
        maxDiscount = discount;
    }
}

console.log(`Cea mai mare reducere este de ${maxDiscount}%.`);

//console.log(`Produsul ${BAZA_DE_DATE[maxDiscount].nume} are reducere de ${maxDiscount}% si costa ${PriceAfterDiscount}.`);
