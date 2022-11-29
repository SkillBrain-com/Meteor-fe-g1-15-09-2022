let maxDiscount = 0;
for (let i = 0; i < BAZA_DE_DATE.length; i++) {
    const discount = BAZA_DE_DATE[i].procentReducere;
    if(discount > maxDiscount) {
        maxDiscount = discount;
    }
}

console.log(`Cea mai mare reducere este de ${maxDiscount}%.`);