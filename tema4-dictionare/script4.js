for (let i = 0; i < BAZA_DE_DATE.length; i++) {
    const articol = BAZA_DE_DATE[i];
    const { nume, pret, procentReducere } = articol;
    if (procentReducere > 15) {
        const pretRedus = pret - (pret * procentReducere / 100);
        console.log(`nume:${nume} \npret initial ${pret}\nprocent reducere:${procentReducere}`)
    }
}