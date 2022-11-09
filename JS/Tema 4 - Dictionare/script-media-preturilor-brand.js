console.log(`Tema 4 - Dictionare`);
console.log(`Cerinta 8`);
// Afisati media preturilor(cu reducere aplicata) in functie de fiecare brand


const brandAndPriceAfterDiscount = {};

for (let i = 0; i < BAZA_DE_DATE.length; i++) {
    const {pret, procentReducere, brand} = BAZA_DE_DATE[i];
    const discountValue = (pret * procentReducere) / 100;
    const priceAfterDiscount = pret - discountValue;
    
    if (brandAndPriceAfterDiscount[brand] === undefined) {
        brandAndPriceAfterDiscount[brand] = {
            sum: priceAfterDiscount,
            clothesNumber: 1
        }
    }
    else {
        brandAndPriceAfterDiscount[brand].sum += priceAfterDiscount;
        brandAndPriceAfterDiscount[brand].clothesNumber++
    }
}

const clothesBrand = Object.keys(brandAndPriceAfterDiscount);

for (let i = 0; i < clothesBrand.length; i++) {
    const brand = clothesBrand[i];
    const {sum, clothesNumber} = brandAndPriceAfterDiscount[brand];

    const avgBrandPrice = sum / clothesNumber;
    console.log(`Media preturilor de vanzare dupa aplicarea reducerilor pentru ${brand} este ${avgBrandPrice}.`)
}