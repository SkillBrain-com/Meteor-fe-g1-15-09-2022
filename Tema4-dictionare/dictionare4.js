for(let i = 0; i < BAZA_DE_DATE.length; i++){
    const articol = BAZA_DE_DATE[i];
    const numeArticol = articol.nume;
    const reducerePret = articol.procentReducere;
    const pret = articol.pret;
if(reducerePret > 15){
    const pretRedus = pret-reducerePret*pret/100;
    console.log(`Articoulul ${numeArticol} are o reducere de ${reducerePret}%, pretul final fiind ${Math.round(pretRedus)}`)
}
}

//O a doua rezolvare.

const histogram4 = {};
for(let i = 0; i < BAZA_DE_DATE.length; i++){
    const articol = BAZA_DE_DATE[i];
    const numeArticol = articol.nume;
    const reducerePret = articol.procentReducere;
    const pret = articol.pret;
    const cheie = `${numeArticol}-${reducerePret}%`
    if(reducerePret > 15){
        const pretRedus = pret-reducerePret*pret/100;
        histogram4[cheie]=Math.round(pretRedus);
    }
}
console.log(histogram4)
