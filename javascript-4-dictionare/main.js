console.log(marciMasini);

let countBMW = 0;
let countAudi = 0;
let countOpel = 0;
let countDacia = 0;

for (let i = 0; i < marciMasini.length; i++) {
    if (marciMasini[i] === "Audi") {
        countAudi++;
    }
    if (marciMasini[i] === "Opel") {
        countOpel++;
    }
    if (marciMasini[i] === "Dacia") {
        countDacia++;
    }
    if (marciMasini[i] === "BMW") {
        countBMW++;
    }
}

console.log(`BMW ${countBMW}`);
console.log(`Audi ${countAudi}`);
console.log(`Opel ${countOpel}`);
console.log(`Dacia ${countDacia}`);