console.log(`Tema 4 - exercitiul 6`)
//Afisati media preturilor produselor dupa aplicarea reducerilor

let sumaPretRedus = 0;

for (i = 0; i < BAZA_DE_DATE.length; i++) {
    const produse = BAZA_DE_DATE[i];
    const {pret, procentReducere} = produse;
    pretRedus = pret - (pret * procentReducere/100);
    sumaPretRedus += pretRedus;
    mediaPretRedus = sumaPretRedus / BAZA_DE_DATE.length;    
}

console.log(`Media preturilor produselor dupa aplicarea reducerilor este ${mediaPretRedus}`);