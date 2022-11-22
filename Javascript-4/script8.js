console.log("Exercitiul 8");

const histogram1 = {};
const histogram2 = {};

for (let i=0; i<BAZA_DE_DATE.length; i++) {
    const imbracaminte = BAZA_DE_DATE[i];
    const {brand, pret, procentReducere} = imbracaminte;
    const reducere = (procentReducere * pret)/100;
    const pretRedus = pret - reducere;

    
    if (histogram1[brand] === undefined) {
        histogram1[brand] = pretRedus;
    }
    else {
        histogram1[brand] = histogram1[brand] + pretRedus;
    }
    
    if (histogram2[brand] === undefined) {
        histogram2[brand] = 1;
    }
    else {
        histogram2[brand]++;
    }

}
console.log(histogram1);
const keys = Object.keys(histogram1);
const values = Object.values(histogram1); 
const values2 = Object.values(histogram2); 

for ( let i=0; i< values.length; i++) {
    const avgSumaPretRedus = values[i] / values2[i];
    console.log(`Media preturilor(cu reducere aplicata) pentru ${keys[i]} este: ${avgSumaPretRedus}`);
}