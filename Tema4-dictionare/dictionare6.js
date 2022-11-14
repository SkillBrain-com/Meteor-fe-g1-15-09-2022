let mediePret=0;
for(let i = 0; i < BAZA_DE_DATE.length; i++){
    const articol = BAZA_DE_DATE[i];
    const reducerePret = articol.procentReducere;
    const pret = articol.pret;
    const pretNou = pret - pret*reducerePret/100;
    mediePret+=pretNou;
}
mediePret/=BAZA_DE_DATE.length;

console.log(`Media tuturor preturilor reduse este ${Math.round(mediePret)}`);
