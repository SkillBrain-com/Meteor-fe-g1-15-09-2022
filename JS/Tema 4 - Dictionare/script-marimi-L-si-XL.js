console.log(`Tema 4 - Dictionare`);
console.log(`Cerinta 7`);
// Afisati cate articole sunt dispoibile in marimea L si XL

let sizeLAndXL = 0;
for (let i = 0; i < BAZA_DE_DATE.length; i++) {
    sizes = BAZA_DE_DATE[i].dimensiuni;
    if (sizes.includes("L") && sizes.includes("XL")) {
        sizeLAndXL++;  
    }
}
console.log(`Sunt ${sizeLAndXL} articole dispoibile in marimea L si XL.`);


//const dimensiuni = BAZA_DE_DATE[1].dimensiuni; 
//console.log(dimensiuni);