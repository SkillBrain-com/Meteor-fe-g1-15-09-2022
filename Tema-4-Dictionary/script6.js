console.log(`Tema 4 - exercitiul 7`)
//Afisati cate articole sunt disponibile in marimea L si XL


let indexMarimi = 0;
let L = 0;
let XL = 0;

for (i = 0; i < BAZA_DE_DATE.length; i++) {
    const produse = BAZA_DE_DATE[i];
    const {dimensiuni} = produse;
    if (dimensiuni.includes("L") && dimensiuni.includes("XL")) {
        indexMarimi++;
    }
}    

console.log(`${indexMarimi} articole sunt disponibile in marimea L si XL.`); 

//dimensiuni[L] && dimensiuni[XL]
//BAZA_DE_DATE.dimensiuni[L] && BAZA_DE_DATE.dimensiuni[XL]
//dimensiuni.includes("L") && dimensiuni.includes("XL")