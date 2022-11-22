console.log(`Tema 4 - Dictionare`);
console.log(`Cerinta 4`);
// Afisati numele, procentul de reducere si pretul redus pentru articolele care sunt
// la mega reducere(adica procentul de reducere este mai mare decat 15)

for (let i = 0; i < BAZA_DE_DATE.length; i++) {
  const discount = BAZA_DE_DATE[i].procentReducere;
  const discountValue =
    (BAZA_DE_DATE[i].pret * BAZA_DE_DATE[i].procentReducere) / 100;
  const priceAfterDiscount = BAZA_DE_DATE[i].pret - discountValue;
  if (discount > 15) {
    console.log(
      `Produsul ${
        BAZA_DE_DATE[i].nume
      } are reducere de ${discount}% si costa ${priceAfterDiscount.toFixed(2)}.`
    );
  }
}
