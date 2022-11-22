let discountPriceAvg = 0;

for (let i = 0; i < BAZA_DE_DATE.length; i ++) {
  const control = BAZA_DE_DATE[i];
  const name = control.nume;
  const discount = control.procentReducere;
  const price = control.pret;
  const salePrice = price - price * discount / 100;

  discountPriceAvg += salePrice;

  discountPriceAvg /= BAZA_DE_DATE.length;
}
console.log (`Media preturilor reduse este ${discountPriceAvg}`);
