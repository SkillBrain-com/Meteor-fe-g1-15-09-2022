console.warn("Cerinta 3:");
const marca = ["BMW", "Audi", "Dacia", "Audi", "Audi", "Dacia", "Dacia", "Dacia", "BMW", "Volkswagen", "Opel", "Mercedes", "BMW", "Volkswagen"];
const pretCumparare = [16000, 9000, 17000, 20300, 6000, 8000, 10000, 6000, 35500, 18900, 41000, 22500, 20500, 11590];
const model = ["Seria 1", "A3", "Spring", "Q5", "A4", "Spring", "Docker", "Logan", "X5", "Golf", "Astra", "E 200", "220i", "Golf"];

let celMaiMicPret = pretCumparare[0];
let celMaiMarePret = 0;
let pretMareMarcii = 0;
let pretMicMarcii = 0;
let pretMareModel= 0;
let pretMicModel = 0;

for (let i=0; i < pretCumparare.length; i++) {
    if (pretCumparare[i] > celMaiMarePret) {
        celMaiMarePret = pretCumparare[i];
        pretMareMarcii = marca[i];
        pretMareModel = model[i];
    }

    if (celMaiMicPret > pretCumparare[i]) {
        celMaiMicPret = pretCumparare[i];
        pretMicMarcii = marca[i];
        pretMareModel = model[i];
    }
}


console.log(`Cel mai mare pret este ${celMaiMarePret} pentru marca ${pretMareMarcii} ${pretMareModel}`);
console.log(`Cel mai mic pret este ${celMaiMicPret} pentru marca ${pretMicMarcii}`);