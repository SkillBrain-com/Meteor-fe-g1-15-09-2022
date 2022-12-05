
let count = 0;

for (let i = 0; i < BAZA_DE_DATE.length; i++) {
    const articol = BAZA_DE_DATE[i];
    // const nrDimensiuni=aricol.dimensiuni.lenhth;
    const { dimensiuni } = articol;
    const { culori } = articol;


    if ((dimensiuni.length < 4) &&
        (culori.includes("ROSU") || culori.includes("VERDE"))) {
        count++;
    }
}

console.log(`Sunt ${count} articole care au cel mult 3 dimensiuni si au culoarea verde sau rosu`)