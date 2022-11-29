let sizeLAndXL = 0;
for (let i = 0; i < BAZA_DE_DATE.length; i++) {
    sizes = BAZA_DE_DATE[i].dimensiuni;
    if (sizes.includes("L") && sizes.includes("XL")) {
        sizeLAndXL++;  
    }
}
console.log(`Sunt ${sizeLAndXL} articole dispoibile in marimea L si XL.`);