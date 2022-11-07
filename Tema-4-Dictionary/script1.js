console.log(`Tema 4 - exercitiul 2`)
//Creati un dictionar, in care sa numarati cate articole de la fiecare brand exista in baza de date (histograma).

const histogram = {};

for (let i = 0; i < BAZA_DE_DATE.length; i++) {
    const produse = BAZA_DE_DATE[i];
    const {brand} = produse;
    
    if (histogram[brand] === undefined) {
        histogram[brand] = 1;
    }
    else {
        histogram[brand]++;
    }
}

console.log(histogram);