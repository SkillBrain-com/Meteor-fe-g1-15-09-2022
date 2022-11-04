console.log("Cerinta 3");

const CarBuyPrice2List=[16000, 9000, 17000, 20300, 6000, 8000, 10000, 6000, 35500, 18.900, 41000, 22500, 20500, 11590];
const Marca2List=["BMW", "Audi", "Dacia", "Audi", "Audi","Dacia", "Dacia", "Dacia", "BMW", "Volkswagen", "Opel", "Mercedes", "BMW", "Volkswagen"];
const Model2List=["Seria 1", "A3", "Spring", "Q5", "A4", "Spring", "Docker", "Logan", "X5", "Golf", "Astra", "E200", "220i", "Golf"];

let maxPrice=CarBuyPrice2List[0];
let minPrice=CarBuyPrice2List[0];

for(let i=0; i<CarBuyPrice2List.length; i++){
    if(CarBuyPrice2List[i]>maxPrice){
    maxPrice=CarBuyPrice2List[i];
    }
if(CarBuyPrice2List[i]<minPrice){
    minPrice=CarBuyPrice2List[i];
}
}
console.log(`Cel mai mare pret de cumparare al unei masini este: ${maxPrice}`);
console.log(`Cel mai mic pret de cumparare al unei masini este: ${minPrice}`);
