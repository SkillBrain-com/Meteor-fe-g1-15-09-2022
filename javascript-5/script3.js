function selecteazaDupaCantitate(listaProduse, limita) {
    const returnList = [];
    for (let i = 0; i < listaProduse.length; i++) {
        const produs = listaProduse[i];
        const {cantitate} = produs;
        if (cantitate > limita) {
            // console.log(produs);
            returnList.push(produs);
        }
    }
    return returnList;
}

function selecteazaPreturile(listaProduse) {
    const returnList = [];
    for (let i = 0; i < listaProduse.length; i++) {
        const produs = listaProduse[i];
        const {cantitate, pret} = produs;
        returnList.push(cantitate*pret);
    }
    return returnList;
}

function calculeazaValoareMedie(listaProduse) {
    let suma = 0;
    let count = 0;
    if (listaProduse.length === 0) {
        return 0;
    } else {
    for (let i = 0; i < listaProduse.length; i++) {
        const produs = listaProduse[i];
        const {cantitate, pret} = produs;
        if (cantitate > 0) {
            suma += (cantitate*pret);
            count++;
        }
    }
    const media = suma/count;
    return media;
    }
}