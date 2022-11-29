let contor = 0;
let redColor = 0;
let greenColor = 0;
for (let i = 0; i < BAZA_DE_DATE.length; i++) {
    const sizes = BAZA_DE_DATE[i].dimensiuni;
    const disponibileSizes = sizes.length;
    const colors = BAZA_DE_DATE[i].culori;
    if(disponibileSizes <= 3) { 
        contor++;
    }
    if(disponibileSizes <= 3 && colors.includes("ROSU")) { 
        redColor++;
    }
    if(disponibileSizes <= 3 && colors.includes("VERDE")) {
        greenColor++;
    }
}
console.log(`Sunt disponibile ${contor} de articole in cel mult 3 dimensiuni, dintre care: ${redColor} pe culoarea rosie, ${greenColor} pe culoarea verde.`);