console.log(`Tema 3`);
console.log(`Cerinta 6`);

//Continua problema 5 si obtine profitul mediu pentru toate masinile
//(media aritmetica a tuturor masinilor)
//Extra: Afiseaza numele si profitul masinilor care au profitul peste medie

//const carMake5 = ["BMW", "Audi", "Dacia", "Audi", "Audi", "Dacia", "Dacia", "Dacia", "BMW", "Volkswagen", "Opel", "Mercedes", "BMW", "Volkswagen"];
//const carModel5 = ["Seria 1", "A3", "Spring", "Q5", "A4", "Spring", "Docker", "Logan", "X5", "Golf", "Astra", "E 200", "220i", "Golf"];
//const BuyPrice5 = [16000, 9000, 17000, 20300, 6000, 8000, 10000, 6000, 35500, 18900, 41000, 22500, 20500, 11590];
//const SellPrice5 = [18000, 12000, 18000, 27300, 12000,14000, 12000, 9000, 37000, 19900, 43000, 27400, 21500, 13590];

let sumBuyPrice = 0;
let sumSellPrice = 0;
let avgProfit = 0;

for (let i = 0; i < BuyPrice.length; i++) {
    sumBuyPrice += BuyPrice[i];
    sumSellPrice += SellPrice[i];
    avgProfit = (sumSellPrice - sumBuyPrice) / BuyPrice.length;  
}
console.log(avgProfit);

for (let i = 0; i < BuyPrice.length; i++) {
    //const avgProfit = (sumSellPrice - sumBuyPrice) / BuyPrice.length;
    if(profit > avgProfit) {
        
    }
    console.log(`Profitul pentru ${carMake[i]} ${carModel[i]} este ${profit[i]}.`);
}