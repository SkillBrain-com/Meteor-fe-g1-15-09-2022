let suma = 0;

for (let i = 0; i < BAZA_DE_DATE.length; i++) {
    const articol = BAZA_DE_DATE[i];
    const {pret, procentReducere} = articol;
    const pretRedus = pret - (pret * procentReducere / 100);
    suma = suma + pretRedus;
}

const mediaPreturilorDupaReducere = suma / BAZA_DE_DATE.length;
console.log(`media preturilor dupa reducere este de ${mediaPreturilorDupaReducere}, approx ${Math.round(mediaPreturilorDupaReducere)}`);