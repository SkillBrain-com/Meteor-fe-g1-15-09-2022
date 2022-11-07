console.log(`Tema 4 - exercitiul 3`)
//Afisati cate articole sunt disponibile in cel mult 3 dimensiuni si lista de culori include 
//culoarea rosu sau culoarea verde.

    let index = 0;
    let ROSU = 0;
    let VERDE = 0;
    
for (i = 0; i < BAZA_DE_DATE.length; i++) {
        const produse = BAZA_DE_DATE[i];
        const {dimensiuni, culori} = produse;
    if (dimensiuni.length <= 3 && (culori.includes("ROSU") || culori.includes("VERDE"))) {
        index++;
    }
}    

console.log(`${index} articole sunt disponibile in cel mult 3 dimensiuni si lista de culori include culoarea rosie sau culoarea verde.`); 

//culori[ROSU] || culori[VERDE]