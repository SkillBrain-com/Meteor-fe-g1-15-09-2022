const pretCumparare = [16000, 9000, 17000, 20300, 6000, 8000, 10000, 6000, 35500, 18900, 41000, 22500, 20500, 11590];
const pretVanzare = [18000, 12000, 18000, 27300, 12000, 14000, 12000, 9000, 37000, 19900, 43000, 27400, 21500, 13590];
const Marca = ["BMW", "Audi", "Dacia", "Audi", "Audi", "Dacia", "Dacia", "Dacia", "BMW", "Volkswagen", "Opel", "Mercedes", "BMW", "Volkswagen"];
const Model = ["Seria 1", "A3", "Spring", "Q5", "A4", "Spring", "Docker", "Logan", "X5", "Golf", "Astra", "E 200", "220i", "Golf"];


let profit = 0;

for (let i=0; i<pretCumparare.length; i++) {
    profit = pretVanzare[i] - pretCumparare[i];
    console.log(`Masina ${Marca[i]} ${Model[i]} are profitul de ${profit}`);
}