let sizeSelector = 0;

for (let i =0; i < BAZA_DE_DATE.length; i ++) {
  const size = BAZA_DE_DATE[i].dimensiuni;
  if (size.includes("L") && size.includes("XL")) {
    sizeSelector ++;
  }
}
console.log (`Articolele disponibile in dimensiunile L si XL sunt in numar de ${sizeSelector}`);