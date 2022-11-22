console.log ("Punctul 3");

let indexMax = 0;
let indexMin = 0;
let maxPretCumparare = pretCumparareList[0];
let minPretCumparare = pretCumparareList[0];

for (let i = 0; i < pretCumparareList.length; i++) {
  if (pretCumparareList[i] > maxPretCumparare) {
    maxPretCumparare = pretCumparareList[i];
    indexMax = i;
  }

  if (pretCumparareList[i] < minPretCumparare) {
    minPretCumparare = pretCumparareList[i];
    indexMin = i;
  }

}

console.log ( `Pretul minim al unei masini este ${minPretCumparare}`);
console.log ( `Pretul maxim al unei masini este ${maxPretCumparare}`);

("Punctul 3 - a");

console.log (`Masina cu cel mai mic pret de ${pretCumparareList[indexMin]} este ${marcaList[indexMin]} ${modelList[indexMin]}`);
console.log (`Masina cu cel mai mare pret de ${pretCumparareList[indexMax]} este ${marcaList[indexMax]} ${modelList[indexMax]}`);