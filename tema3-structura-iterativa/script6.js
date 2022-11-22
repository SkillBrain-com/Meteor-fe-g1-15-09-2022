console.log("Exercise 6");

let profitMediu = 0;

for (let i =0; i < sellingPrice.length; i++) {
    profitMediu += sellingPrice[i]- purchasePriceCar[i]; 
}

profitMediu = profitMediu / sellingPrice.length;

console.log(`Profitul mediu este : ${profitMediu}`)