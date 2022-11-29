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
