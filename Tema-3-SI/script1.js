console.log ("Punctul 3");

//let minPosition = pretCumparareList.indexOf(6000);
const indexes = pretCumparareList.map((val, idx) => { 
    console.log(`Index of ${val} is ${idx}`);
    return idx;
});

pretCumparareList.sort(function(a,b){return a-b});
let minCump = pretCumparareList[0];
pretCumparareList.sort(function(a,b){return b-a});
let maxCump = pretCumparareList[0];

console.log ( `Pretul minim al unei masini este ${minCump}`);
console.log ( `Pretul maxim al unei masini este ${maxCump}`);

("Punctul 3 - a");

//console.log (`6000 se gaseste la pozitia ` + minPosition);
console.log (`Masina cu cel mai mic pret de ${minCump} este un ${marcaList[4]} ${modelList[4]} sau ${marcaList[7]} ${modelList[7]}`);
console.log (`Masina cu cel mai mare pret de ${maxCump} este ${marcaList[10]} ${modelList[10]}`);
