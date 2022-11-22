console.log(`Tema 4 - Dictionare`);
console.log(`Cerinta 2`);
// Creati un dictionar, in care sa numarati cate articole de la
// fiecare brand exista in baza de date(histograma).

const histogram = {};
for (let i = 0; i < BAZA_DE_DATE.length; i++) {
    const brand = BAZA_DE_DATE[i].brand;
    if((histogram[brand]) === undefined) {
        histogram[brand] = 1;
    }
    else {
        histogram[brand]++;
    }
}
console.log(histogram);