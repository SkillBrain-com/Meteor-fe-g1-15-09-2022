const histogram = {};

for ( let i = 0; i < BAZA_DE_DATE.length; i ++) {
    const articol = BAZA_DE_DATE[i].brand;

    if (histogram [articol] === undefined) {
        histogram [articol] = 1;
    }
    else {
        histogram [articol] ++;
    }
    
}
console.log(histogram);