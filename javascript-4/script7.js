let count = 0;

for (let i = 0; i < BAZA_DE_DATE.length; i++) {
    const articol = BAZA_DE_DATE[i];
    const {dimensiuni} = articol;
    if (dimensiuni.includes("L") && dimensiuni.includes("XL")) {
        count++;
    }
}

console.log(`sunt ${count} produse ce sunt disponibile in marimea L si XL`);