let reducereMax, pretRedMax, numeArtRedMax;
for(let i = 0; i < BAZA_DE_DATE.length; i++){
    const articol = BAZA_DE_DATE[i];
    const numeArticol = articol.nume;
    const reducerePret = articol.procentReducere;
    const pret = articol.pret;
if(reducereMax === undefined || reducereMax < reducerePret  ){
reducereMax = reducerePret;
pretRedMax= pret-pret*reducerePret/100;
numeArtRedMax=numeArticol;
}
}
console.log(`Articoulul ${numeArtRedMax} are cea mai mare reducere, de ${reducereMax}%, pretul final fiind ${Math.round(pretRedMax)}`);