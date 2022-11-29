onsole.log("Exercitiul 3a");
function selecteazaDupaCantitate(listaProduse, limita) {
    const returnList = [];
    for (let i=0; i<listaProduse.length; i++) {
        const produs = listaProduse[i];
        const {cantitate} = produs;
        if (cantitate > limita) {
          returnList.push(produs);
        }
    }
    return returnList;

}

console.log(selecteazaDupaCantitate(PRODUSE, 10));

console.log("Exercitiul 3b");

function selecteazaPreturile(listaProduse) {
    const returnList = [];
    for (let i=0; i<listaProduse.length; i++) {
        const produs = listaProduse[i];
        const {pret, cantitate} = produs;
        const valoare = pret * cantitate;
        returnList.push(valoare);
    } 
    return returnList;   
}
console.log(selecteazaPreturile(PRODUSE));

console.log("Exercitiul 3c");

function calculeazaValoareMedie(listaProduse) {
    let sum = 0;
    let count = 0;
    for (let i=0; i<listaProduse.length; i++) {
        const produs = listaProduse[i];
        const {pret, cantitate} = produs;
        if (cantitate > 0) {
            const valoare = pret * cantitate;
            sum += valoare;
            count++;
        }
    }
    return sum/count;
}
const medie = calculeazaValoareMedie(PRODUSE);
console.log(medie);