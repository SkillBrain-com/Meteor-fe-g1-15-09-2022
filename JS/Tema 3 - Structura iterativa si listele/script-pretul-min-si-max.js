console.log(`Tema 3`);
console.log(`Cerinta 3`);

//3. Urmarind coloana pret cumparare, creeaza o lista cu aceste date, si creeaza un algoritm ce iti 
//afiseaza cel mai mic pret de cumparare al unei masini respectiv cel mai mare pret de cumparare al unei 
//masini
            //1. Extra: Afiseaza care este numele masinii cu cel mai mare pret, respectic al celei cu 
            //cel mai mic pret

const carBuyPrice2 = [16000, 9000, 17000, 20300, 6000, 8000, 10000, 6000, 35500, 18900, 41000, 22500, 20500, 11590];

for(i = 0; i < carBuyPrice2.length; i++) {
const carBuyPriceMax = Math.max(carBuyPrice2[i]);
console.log(carBuyPriceMax);

const carBuyPriceMin = Math.min(carBuyPrice2[i]);
console.log(carBuyPriceMin);
}


    
   
    
