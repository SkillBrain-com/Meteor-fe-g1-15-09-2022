console.warn("Cerinta 2:");
const priceSale = [16000, 9000, 17000, 20300, 6000, 8000, 10000, 6000, 35500, 18900, 41000, 22500, 20500, 11590];

let sumPrice = 0;
let avgSumPrice = 0;

for (let i=0; i < priceSale.length; i++ ) {
    sumPrice += priceSale[i];
}

console.log(` Pretul mediu de cumparare al unei masini este: ${avgSumPrice}`);