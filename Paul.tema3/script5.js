console.log("Exercitiul 5");

const carOutgoingPrice = [18000,12000,18000,27300,12000,14000,12000,9000,37000,19900,43000,27400,21500,13590];


let saleProfit = 0;

for (let i = 0; i < carOutgoingPrice.length; i ++) {
    saleProfit = carOutgoingPrice[i] - carIngoingPrice[i];
    console.log(`Profitul pentru ${carName[i]} ${carModel[i]} este: ${saleProfit}`);
}