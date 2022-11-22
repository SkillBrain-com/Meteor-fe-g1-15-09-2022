console.log ("Exercitiul 2");

const carIngoingPrice = [16000,9000,17000,20300,6000,8000,10000,6000,35500,18900,41000,22500,20500,11590];

let carIngoingPriceAvg = 0;

for(let i = 0; i < carIngoingPrice.length; i ++) {
    carIngoingPriceAvg += carIngoingPrice[i];
}

carIngoingPriceAvg = carIngoingPriceAvg / carIngoingPrice.length;


console.log ( `${carIngoingPriceAvg}`);
    
