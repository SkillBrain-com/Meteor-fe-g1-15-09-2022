console.log(`Tema 3`);
console.log(`Cerinta 3`);

//3. Urmarind coloana pret cumparare, creeaza o lista cu aceste date, si creeaza un algoritm ce iti 
//afiseaza cel mai mic pret de cumparare al unei masini respectiv cel mai mare pret de cumparare al unei 
//masini
            //1. Extra: Afiseaza care este numele masinii cu cel mai mare pret, respectic al celei cu 
            //cel mai mic pret

const carBuyPrice2 = [16000, 9000, 17000, 20300, 6000, 8000, 10000, 6000, 35500, 18900, 41000, 22500, 20500, 11590];
const carMake2 = ["BMW", "Audi", "Dacia", "Audi", "Audi", "Dacia", "Dacia", "Dacia", "BMW", "Volkswagen", "Opel", "Mercedes", "BMW", "Volkswagen"]
const carModel2 = ["Seria 1", "A3", "Spring", "Q5", "A4", "Spring", "Docker", "Logan", "X5", "Golf", "Astra", "E 200", "220i", "Golf"]

let carPrice = 0;
let carMaxPrice = 0;
for(i = 0; i < carBuyPrice2.length; i++) {
    const maxPrice = carBuyPrice2[i];
    carPrice += maxPrice;
    if(maxPrice > carMaxPrice) {
        carMaxPrice = maxPrice;
    } 
}
console.log(`Cea mai scumpa masina costa ${carMaxPrice}.`);

//console.log(carBuyPrice2.indexOf(carMaxPrice));

console.log(`Cea mai scumpa masina este ${carMake2[carBuyPrice2.indexOf(carMaxPrice)]} ${carModel2[carBuyPrice2.indexOf(carMaxPrice)]} si costa ${carBuyPrice2[carBuyPrice2.indexOf(carMaxPrice)]}.`);


let carPrice2 = 0;
let carMinPrice = 0;
for(i = 0; i < carBuyPrice2.length; i++) {
    const minPrice = carBuyPrice2[i];
    carPrice += minPrice;
    if(minPrice < carMinPrice) {
        carMinPrice = minPrice;
    }
}
console.log(carMinPrice);

    
   
    
