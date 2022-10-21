const DATA = [
    {
        price: 10.00,
        unitCount: 10,
    },
    {
        price: 12.50,
        unitCount: 4,
    },
    {
        price: 11.00,
        unitCount: 2,
    },
];


function dca(stock) {
    let sum = 0;
    let unitSum = 0;
    for (let i = 0; i < stock.length; i++) {
        sum += stock[i].price * stock[i].unitCount;
        unitSum += stock[i].unitCount;
    }
    return sum / unitSum;
}

const result = dca(DATA);
console.log(result);
