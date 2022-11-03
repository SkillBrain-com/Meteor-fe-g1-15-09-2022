console.log(marciMasini);

const histogram = {};

for (let i = 0; i < marciMasini.length; i++) {
    const marca = marciMasini[i];

    if (histogram[marca] === undefined) {
        histogram[marca] = 1;
    }
    else {
        histogram[marca]++;
    }
}

console.log(histogram);