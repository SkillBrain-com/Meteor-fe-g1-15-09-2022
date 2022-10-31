const Marca = ["BMW", "Audi", "Dacia", "Audi", "Audi", "Dacia", "Dacia", "Dacia", "BMW", "Volkswagen", "Opel", "Mercedes", "BMW", "Volkswagen"];
const PretCumparare = [16000, 9000, 17000, 20300, 6000, 8000, 10000, 6000, 35500, 18900, 41000, 22500, 20500, 11590];
const Model = ["Seria 1", "A3", "Spring", "Q5", "A4", "Spring", "Docker", "Logan", "X5", "Golf", "Astra", "E 200", "220i", "Golf"];

let celmaimicpret = PretCumparare[0];
let celmaimarepret = 0;
let marcamicpret = 0;
let marcamarepret = 0;
let modelmicpret = 0;
let modelmarepret = 0;

for (let i=0; i<PretCumparare.length; i++) {
    if (PretCumparare[i] > celmaimarepret) {
        celmaimarepret = PretCumparare[i];
        marcamarepret = Marca[i];
        modelmarepret = Model[i];
    } 

    if (celmaimicpret > PretCumparare[i]) {
        celmaimicpret = PretCumparare[i];
        marcamicpret = Marca[i];
        modelmicpret = Model[i];
    }
}

console.log(`Cel mai mare pret este ${celmaimarepret} pentru marca ${marcamarepret} ${modelmarepret}`);
console.log(`Cel mai mic pret este ${celmaimicpret} pentru marca ${marcamicpret} ${modelmicpret}`);


