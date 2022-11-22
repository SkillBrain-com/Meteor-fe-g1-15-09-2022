const listaDeNume = ["Ana", "Maria", "Luci", "Nicu", "Antonia", "Gica", "Cristina"];
function returnare(listaNume, litera) {
    const returnList = [];
    for (let i=0; i<listaNume.length; i++) {
        if (listaNume[i].charAt(0) === litera) {
            returnList.push(listaNume[i]);
            //console.log(`Numele ${listaNume[i]} incepe litera ${litera}`)
        }
        }
    return returnList;
}

const listaNulla = returnare(listaDeNume, "A");
//console.log(returnare(listaDeNume, "A"));
console.log(listaNulla)