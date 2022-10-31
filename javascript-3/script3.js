const marca = ["BMW", "Audi", "Dacia", "Audi", "Audi", "Dacia", "Dacia", "Dacia", "BMW", "Volkswagen", "Opel", "Mercedes", "BMW", "Volkswagen"];
const model = ["Seria 1", "A3", "Spring", "Q5", "A4", "Spring", "Docker", "Logan", "X5", "Golf", "Astra", "E 200", "220i", "Golf"];
const pretCumparare = [16000, 9000, 17000, 20300, 6000, 8000, 10000, 6000, 35500, 18900, 41000, 22500, 20500, 11590];
let celMaiMicPret = pretCumparare[0];
let celMaiMarePret = 0;
let celeMaiIeftineMasini = new Array();
let celeMaiScumpeMasini = new Array();
let text = "";
let text2 = "";

for (let i = 0; i < pretCumparare.length; i++) {
    if (celMaiMicPret > pretCumparare[i]) {
        celMaiMicPret = pretCumparare[i];
    }

    if (celMaiMarePret < pretCumparare[i]) {
        celMaiMarePret = pretCumparare[i];
    }
}

for (let i = 0; i < pretCumparare.length; i++) {
    if (pretCumparare[i] === celMaiMicPret) {
        celeMaiIeftineMasini.push(i);
        // console.log(`Cea mai ieftina masina este ${marca[i]} ${model[i]} avand pretul de ${celMaiMicPret}`);
    }
    if (pretCumparare[i] === celMaiMarePret) {
        celeMaiScumpeMasini.push(i);
        // console.log(`Cea mai scumpa masina este ${marca[i]} ${model[i]} avand pretul de ${celMaiMarePret}`);
    }
}

if (celeMaiIeftineMasini.length === 1) {
    console.log(`Cea mai ieftina masina este ${marca[celeMaiIeftineMasini[0]]} ${model[celeMaiIeftineMasini[0]]} avand pretul de ${celMaiMicPret}`)
} else {
    for (let i = 0; i < celeMaiIeftineMasini.length; i++) {
        text += marca[celeMaiIeftineMasini[i]] + " " + model[celeMaiIeftineMasini[i]] + "; ";
    }
    console.log(`cele mai ieftine masini sunt: ${text}avand pretul de ${celMaiMicPret}`);
}

if (celeMaiScumpeMasini.length === 1) {
    console.log(`Cea mai scumpa masina este ${marca[celeMaiScumpeMasini[0]]} ${model[celeMaiScumpeMasini[0]]} avand pretul de ${celMaiMarePret}`)
} else {
    for (let i = 0; i < celeMaiScumpeMasini.length; i++) {
        text += marca[celeMaiScumpeMasini[i]] + " " + model[celeMaiScumpeMasini[i]] + "; ";
    }
    console.log(`cele mai scumpe masini sunt: ${text2}avand pretul de ${celMaiMarePret}`);
}