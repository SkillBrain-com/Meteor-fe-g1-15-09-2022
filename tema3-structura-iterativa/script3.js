console.log ("Exercitiul 3");

const carYear = [2018,2014,2018,2016,2017,2016,2018,2016,2021,2020,2022,2015,2018,2012];

let maxPrice = purchasePriceCar[0];
let minPrice = purchasePriceCar[0];

for(let i = 1; i < purchasePriceCar.length; i++) {
    if ( purchasePriceCar[i] > maxPrice) {
    maxPrice = purchasePriceCar[i];
    }
    if (purchasePriceCar[i] < minPrice) {
    minPrice = purchasePriceCar[i];
    }   
}

console.log (`Pretul maxim este: ${maxPrice}, iar pretul minim este: ${minPrice} `)