console.warn('Cerinta 6');

let profitMediu = 0;

for (let i = 0; i <pretCumparareProfit.length; i++) {
    profitMediu +=pretCumparareProfit[i] - pretVanzareProfit[i];
}

profitMediu = profitMediu / pretCumparareProfit.length;

console.log(`Profitul mediu pentru toate masinile este: ${profitMediu}`);

// nu cred ca e ok, asta este rezultatul -3028.5714285714284 obtinut...