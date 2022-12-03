// start IIFE
(function () {

    console.log(`exercitiul3-6`);

    const marca = ["BMW", "Audi", "Dacia", "Audi", "Audi", "Dacia", "Dacia", "Dacia", "BMW", "Volkswagen", "Opel", "Mercedes", "BMW", "Volkswagen"];
    const model = ["Seria 1", "A3", "Spring", "Q5", "A4", "Spring", "Docker", "Logan", "X5", "Golf", "Astra", "E200", "220i", "Golf"];

    const pretCumparare = [16000, 9000, 17000, 20300, 6000, 8000, 10000, 6000, 35500, 18900, 41000, 22500, 20500, 11590];
    const pretVanzare = [18000, 12000, 18000, 27300, 12000, 14000, 12000, 9000, 37000, 19900, 43000, 27400, 21500, 13590];

    let profit = 0;
    let sumaProfit = 0;
    let medieProfit = 0;


    for (let i = 0; i < marca.length; i++) {
        profit = pretVanzare[i] - pretCumparare[i];
        sumaProfit += profit;
    }

    medieProfit = sumaProfit / pretCumparare.length;

    console.log(`media profitului este:${medieProfit}`);

    for (let i = 0; i < marca.length; i++) {
        profit = pretVanzare[i] - pretCumparare[i];
        if (profit > medieProfit) {
            console.log(`${marca[i]} ${model[i]} a avut un profit de ${profit}, cu ${Math.round(profit - medieProfit)}peste medie`);
        }
    }
    console.log(`media profitului inregistrat este de ${Math.round(medieProfit)}, mai exact ${medieProfit}`)


})()