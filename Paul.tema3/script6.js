console.log("Exercise 6");

let profitMediu = 0;

for (let i =0; i < carOutgoingPrice.length; i ++) {
    profitMediu += carOutgoingPrice[i]-carIngoingPrice[i]; 
}

profitMediu = profitMediu / carOutgoingPrice.length;

console.log(`Profitul mediu este : ${profitMediu}`);