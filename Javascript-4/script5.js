console.log("Exercitiul 5");

let reducereMare;
let pozitieArticolReducereMare = 0;
for (let i=0; i<BAZA_DE_DATE.length; i++) {
    const imbracaminte = BAZA_DE_DATE[i];
    const {nume, pret, procentReducere} = imbracaminte;
    const reducere = (procentReducere * pret)/100;
    const pretRedus = pret - reducere;
    
    if (reducereMare === undefined) {
        reducereMare = reducere;
    }
    else if (reducere > reducereMare) {
        reducereMare = reducere;
        pozitieArticolReducereMare = i;
    }  
}

const reducerea = (BAZA_DE_DATE[pozitieArticolReducereMare].procentReducere * BAZA_DE_DATE[pozitieArticolReducereMare].pret)/100;
const pretFinalRedus = BAZA_DE_DATE[pozitieArticolReducereMare].pret - reducerea;
console.log(`${BAZA_DE_DATE[pozitieArticolReducereMare].nume} cu reducerea: ${reducereMare} cu pretul redus: ${pretFinalRedus}`)