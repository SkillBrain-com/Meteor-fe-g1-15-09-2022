console.log ("Punctul 5");

const vanzareList = [18000, 12000, 18000, 27300, 12000, 14000, 12000, 9000, 37000, 19900, 43000, 27400, 21500, 13590];
const cumparareList = [16000, 9000, 17000, 20300, 6000, 8000, 10000, 6000, 35500, 18900, 41000, 22500, 20500, 11590];


for (let i = 0; i < vanzareList.length; i++) {
    
    const sumVanz = vanzareList[i];
    const sumCump = cumparareList[i];
         
    const profit = sumVanz - sumCump;
    
    console.log(`${marcaList[i]} ${modelList[i]} are profit ${profit}`);
}
