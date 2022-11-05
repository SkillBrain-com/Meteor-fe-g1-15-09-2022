console.log ("Punctul 2");

const pretCumparareList = [16000, 9000, 17000, 20300, 6000, 8000, 10000, 6000, 35500, 18900, 41000, 22500, 20500, 11590];

let cumpSum = 0;
for ( let i = 0; i < pretCumparareList.length; i++) {
    cumpSum += pretCumparareList[i];    
}
const avgCump = Math.round(cumpSum / pretCumparareList.length);
console.log (`Pretul mediul de cumparare al unei masini este de ${avgCump}`);