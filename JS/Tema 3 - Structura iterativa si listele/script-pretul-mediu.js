console.log(`Tema 3`);
console.log(`Cerinta 2`);

const carBuyPrice = [16000, 9000, 17000, 20300, 6000, 8000, 10000, 6000, 35500, 18900, 41000, 22500, 20500, 11590];

let carBuyPriceSum = 0;
for (let i = 0; i < carBuyPrice.length; i++) {
    carBuyPriceSum += carBuyPrice[i];
}

const avgCarBuyPrice = carBuyPriceSum / carBuyPrice.length;
const avgCarBuyPriceRounded = Math.ceil(avgCarBuyPrice);
console.log(`Pretul mediu de cumparare al unei masini este ${avgCarBuyPriceRounded}`);