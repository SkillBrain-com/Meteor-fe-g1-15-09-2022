
//let ceaMaiMareReducere = BAZA_DE_DATE[0].pret * BAZA_DE_DATE[0].procentReducere / 100;
//console.log(ceaMaiMareReducere);

let ceaMaiMareReducere;
let pozitie = 0;

for (let i = 0; i < BAZA_DE_DATE.length; i++) {
    const articol = BAZA_DE_DATE[i];
    const { pret, procentReducere } = articol;
    const reducere = pret * procentReducere / 100;
    if (ceaMaiMareReducere === undefined) {
        ceaMaiMareReducere = reducere;
    }
    else if (reducere > ceaMaiMareReducere) {
        ceaMaiMareReducere = reducere;
        pozitie = i;
    }
}

console.log(`cea mai mare reducere o are articolul ${BAZA_DE_DATE[pozitie].nume} cu o reducere de ${ceaMaiMareReducere}cu un pret final de ${BAZA_DE_DATE[pozitie].pret - ceaMaiMareReducere}`)