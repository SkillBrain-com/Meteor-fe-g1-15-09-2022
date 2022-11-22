const histogram2 = {};
const histogram3 = {};

for (let i = 0; i < BAZA_DE_DATE.length; i++) {
    const articol = BAZA_DE_DATE[i];
    const {pret, procentReducere, brand} = articol;
    const pretRedus = pret - (pret * procentReducere / 100);

    if (histogram2[brand] === undefined) {
        histogram2[brand] =  pretRedus;
        histogram3[brand] = 1;
    }
    else {
        histogram2[brand] += pretRedus;
        histogram3[brand]++;
    }
}

const keys = Object.keys(histogram2);
const values = Object.values(histogram2); 
const values2 = Object.values(histogram3);

for (let i = 0; i < keys.length; i++) {
    const media = values[i] / values2[i];
    console.log(`${keys[i]}: ${media}`);
}
