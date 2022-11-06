console.log(`Tema 3`);
console.log(`Cerinta 1`);
//1. Urmarind coloana **Marca** si **Model,** creaza doua liste cu aceste date, iar apoi creeaza un algoritm care trece
//prin cele doua liste in paralel si afiseaza pe rand masinile sub forma Marca  Model (ex BMW Seria1, Audi A3)

const carMake = ["BMW", "Audi", "Dacia", "Audi", "Audi", "Dacia", "Dacia", "Dacia", "BMW", "Volkswagen", "Opel", "Mercedes", "BMW", "Volkswagen"]
const carModel = ["Seria 1", "A3", "Spring", "Q5", "A4", "Spring", "Docker", "Logan", "X5", "Golf", "Astra", "E 200", "220i", "Golf"]

for(let i = 0; i < carMake.length; i++) {
    console.log(`${carMake[i]} ${carModel[i]}`);
}
