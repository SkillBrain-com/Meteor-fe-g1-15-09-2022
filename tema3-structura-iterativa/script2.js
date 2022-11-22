console.log ("Exercitiul 2");

const purchasePriceCar = [16000,9000,17000,20300,6000,8000,10000,6000,35500,18900,41000,22500,20500,11590];

let averageCarPrice = 0;

for(let i = 0; i < purchasePriceCar.length; i++) {
    averageCarPrice += purchasePriceCar[i];
}

averageCarPrice = averageCarPrice / purchasePriceCar.length;


console.log ( `Pretul mediu de cumparare al unei masini este: ${averageCarPrice}`)




