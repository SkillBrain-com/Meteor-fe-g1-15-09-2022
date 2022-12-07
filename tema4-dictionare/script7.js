let count2 = 0;

for (let i = 0; i < BAZA_DE_DATE.length; i++) {
    const articol = BAZA_DE_DATE[i];
    const { dimensiuni } = articol;
    if (dimensiuni.includes("L") && dimensiuni.includes("XL")) {
        count2++;
    }
}


console.log(`exista ${count2} produse disponibile, avand marimea L si XL;`);