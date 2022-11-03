console.log("Cerinta 2");

const CarBuyPriceList=[16000, 9000, 17000, 20300, 6000, 8000, 10000, 6000, 35500,
18.900, 41000, 22500, 20500, 11590];

let CarBuyPriceSum=0;
for (let i=0; i<CarBuyPriceList.length; i++) {
    CarBuyPriceSum+=CarBuyPriceList[i];
}

const avgPrice=CarBuyPriceSum / CarBuyPriceList.length;
const avgPriceRounded=Math.round(avgPrice);
console.log(`Pretul mediu de cumparare al unei masini este ${avgPriceRounded}`);