console.log ("Punctul 6");

const results = [];

let sumPretVanz = 0;
let sumPretCump = 0;
let profit = 0;

for (let i = 0; i < vanzareList.length; i++) {
           
    sumPretVanz += vanzareList[i];
    sumPretCump += cumparareList[i];
}
    const mediaProfit = Math.round((sumPretVanz - sumPretCump) / vanzareList.length);
    console.log(`Profitul mediu pentru toate masinile este ${mediaProfit}`);

    

console.log ("Punctul 6 - a");


for (let i = 0; i < vanzareList.length; i++) {
    
    const sumVanz = vanzareList[i];
    const sumCump = cumparareList[i];
         
    const profit = sumVanz - sumCump;
    
    if (mediaProfit < profit) {
        console.log (`${marcaList[i]} ${modelList[i]} are profitul ${profit} peste profitul mediu ${mediaProfit}`);
        results.push(profit);
    }
}

console.log(results);