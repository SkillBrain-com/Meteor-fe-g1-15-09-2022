console.log(`Tema 4 - exercitiul 4`)
// Afisati numele, procentul de reducere si pretul redus pentru articolele care sunt la mega reducere
//(adica procentul de reducere este mai mare decat 15)

for (i = 0; i < BAZA_DE_DATE.length; i++) {
    const produse = BAZA_DE_DATE[i];
    const {nume, pret, procentReducere} = produse;
    const pretRedus = pret - (pret * procentReducere/100);
    if (procentReducere > 15) {

        console.log(`${nume} are reducere de ${procentReducere}% iar pretul redus este ${pretRedus}`);
        
    }
}    
