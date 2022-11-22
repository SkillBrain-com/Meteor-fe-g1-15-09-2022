const histogram = {};

for( let i=0; i<BAZA_DE_DATE.length; i++) {
    const imbracaminte = BAZA_DE_DATE[i];
    const {brand} = imbracaminte;

    if (histogram[brand] === undefined) {
        histogram[brand] = 1;
    }
    else {
        histogram[brand]++;
    }
}

console.log(histogram);