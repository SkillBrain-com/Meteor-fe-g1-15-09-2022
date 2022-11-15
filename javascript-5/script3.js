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