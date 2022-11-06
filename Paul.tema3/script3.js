console.log ("Exercitiul 3");


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
console.log (`Pretul maxim este: ${maxPrice} pretul minim este: ${minPrice}`);
    
    
    
    
    
    
    
    
    
    
