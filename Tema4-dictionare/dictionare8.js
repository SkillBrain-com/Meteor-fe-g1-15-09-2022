const histogram8 = {};
for(let i = 0; i < BAZA_DE_DATE.length; i++){
    const articol = BAZA_DE_DATE[i];
    const numeBrand = articol.brand;
    const reducerePret = articol.procentReducere;
    const pret = articol.pret;
    const pretNou = pret - pret*reducerePret/100;
    if(histogram8[numeBrand]===undefined){
        histogram8[numeBrand] = {
            total: pretNou,
            nrArticole: 1
        }
    }
    else{
        histogram8[numeBrand].total+=pretNou;
        histogram8[numeBrand].nrArticole++;
}
}
const brands = Object.keys(histogram8);
for(let i = 0; i < brands.length; i++){
    const curentBrand = brands[i];
    const {total,nrArticole} = histogram8[curentBrand];
    const medieBrand = total/nrArticole;
    console.log(`Media preturilor articolelor din marca ${curentBrand} este ${Math.round(medieBrand)}`);
}
