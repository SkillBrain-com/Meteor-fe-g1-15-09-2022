console.log ("Exercitiul 3");
const carYear = [2018,2014,2018,2016,2017,2016,2018,2016,2021,2020,2022,2015,2018,2012];

let maxPrice = carIngoingPrice[0];
let minPrice = carIngoingPrice[0];


for(let i = 1; i < carIngoingPrice.length; i ++) {
    if ( carIngoingPrice[i] > maxPrice) {
    maxPrice = carIngoingPrice[i];
    }
    if (carIngoingPrice[i] < minPrice) {
    minPrice = carIngoingPrice[i];
    }   
}
console.log (`Pretul maxim este: ${maxPrice}  pretul minim este: ${minPrice} `)














    



    
    
    
    
    
    
    
    
    
