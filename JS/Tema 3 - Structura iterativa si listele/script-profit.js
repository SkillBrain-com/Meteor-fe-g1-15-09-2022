console.log(`Tema 3`);
console.log(`Cerinta 5`);

// Urmarind coloana pret cumparare si pret vanzare, creeaza doua liste pe baza 
//acestor valori. Parcurge apoi aceste liste si afiseaza profitul prentru 
//fiecare dintre masini

const carMake4 = ["BMW", "Audi", "Dacia", "Audi", "Audi", "Dacia", "Dacia", "Dacia", "BMW", "Volkswagen", "Opel", "Mercedes", "BMW", "Volkswagen"];
const carModel4 = ["Seria 1", "A3", "Spring", "Q5", "A4", "Spring", "Docker", "Logan", "X5", "Golf", "Astra", "E 200", "220i", "Golf"];
const BuyPrice = [16000, 9000, 17000, 20300, 6000, 8000, 10000, 6000, 35500, 18900, 41000, 22500, 20500, 11590];
const SellPrice = [18000, 12000, 18000, 27300, 12000,14000, 12000, 9000, 37000, 19900, 43000, 27400, 21500, 13590];

let profit = 0;
for (let i = 0; i < BuyPrice.length; i++) {
    profit = SellPrice[i] - BuyPrice[i];
    console.log(`Profitul pentru ${carMake4[i]} ${carModel4[i]} este ${profit}.`);
}
