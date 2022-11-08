
const grupuriArticole = {};

for(let i = 0; i < BAZA_DE_DATE.length; i++) {
    const {pret, procentReducere, brand} = BAZA_DE_DATE[i];
    const reducere = pret * procentReducere / 100;
    const pretFinal = pret - reducere;

    if (grupuriArticole[brand] === undefined) {
        grupuriArticole[brand] = {
            suma: pretFinal,
            numarArticole: 1
        };
    }
    else {
        grupuriArticole[brand].suma += pretFinal;
        grupuriArticole[brand].numarArticole++
    }
}

const braduri = Object.keys(grupuriArticole);

for(let i = 0;i < braduri.length;i++) {
    const brand = braduri[i];
    const {suma, numarArticole} = grupuriArticole[brand];

    const medie = suma / numarArticole;
    console.log(`${brand} : ${medie.toFixed(2)} Lei`);
}



