console.log(`Tema 4 - exercitiul 5`)
//Afisati numele, reducerea si pretul redus al articolului cu cea mai mare reducere
let indexMax = 0;
let pretulMAxRedus = 0;


for (i = 0; i < BAZA_DE_DATE.length; i++) {
    const produse = BAZA_DE_DATE[i];
    const {nume, pret, procentReducere} = produse;
    BAZA_DE_DATE[i].pretRedus = BAZA_DE_DATE[i].pret - (BAZA_DE_DATE[i].pret * BAZA_DE_DATE[i].procentReducere/100);
    
    pretulMAxRedus = BAZA_DE_DATE[i].procentReducere;
    if (procentReducere[i] > pretulMAxRedus) {
        pretulMAxRedus = procentReducere[i];
        indexMax = i;        
    }
    
}    

console.log(`${BAZA_DE_DATE[indexMax].nume} are reducere de ${BAZA_DE_DATE[indexMax].procentReducere}% iar pretul redus este ${BAZA_DE_DATE[indexMax].pretRedus}`);
