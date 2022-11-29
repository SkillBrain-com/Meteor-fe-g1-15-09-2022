let sumPriceAfterDiscount = 0;
let avgPriceAfterDiscount = 0;
for (let i = 0; i < BAZA_DE_DATE.length; i++) {
  const discount = BAZA_DE_DATE[i].procentReducere;
  const discountValue = (BAZA_DE_DATE[i].pret * BAZA_DE_DATE[i].procentReducere) / 100;
  const priceAfterDiscount = BAZA_DE_DATE[i].pret - discountValue;
  sumPriceAfterDiscount += priceAfterDiscount;
  avgPriceAfterDiscount = sumPriceAfterDiscount / BAZA_DE_DATE.length;
}
console.log(`Media preturilor produselor dupa aplicarea reducerilor este de ${avgPriceAfterDiscount.toFixed(2)}.`);