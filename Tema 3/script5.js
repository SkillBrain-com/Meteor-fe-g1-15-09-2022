console.warn('Cerinta 5');
const pretCumparareProfit = [16000, 9000, 17000, 20300, 6000, 8000, 10000, 6000, 35500, 18900, 41000, 22500, 20500, 11590];
const pretVanzareProfit = [18000,12000,18000,27300,12000,14000,12000,9000,37000,19900,43000,27400,21500,13590];

let prfoit = 0;

for (let i = 0; i< pretCumparareProfit.length; i++) {
    profit = pretCumparareProfit[i] -pretVanzareProfit[i];
    console.log(`Profitul prentru fiecare dintre masini este ${Marca[i]} ${Model[i]} este: ${profit}`);
}