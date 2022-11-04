console.log("Exercitiul 6");

let mediaProfit=0;
for( let i=0; i< pretCumparareList.length; i++) {
   mediaProfit=pretVanzare[i]-pretCumparareList[i];
}
const avgProfit= mediaProfit/pretCumparareList.length;
console.log(`Profitul mediu este ${avgProfit}`);

