console.log("Cerinta 6 ");


let sumaPretRedus=0;

for (let i=0; i< BAZA_DE_DATE.length; i++){
    const imbracaminte= BAZA_DE_DATE[i];
    const {pret, procentReducere}= imbracaminte;
    const reducere= (procentReducere* pret)/100;
    const pretRedus= pret-reducere;
    sumaPretRedus=sumaPretRedus+pretRedus;
}

const avgPretRedus= sumaPretRedus/BAZA_DE_DATE.length;
console.log(`Media preturilor dupa aplicarea reducerilor este ${ Math.round(avgPretRedus)}`); 