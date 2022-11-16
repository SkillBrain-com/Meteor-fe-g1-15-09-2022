console.log("Cerinta 8");

const grupariArticole= {};

for ( let i=0; i< BAZA_DE_DATE.length; i++) {
    const {pret, procentReducere, brand}= BAZA_DE_DATE[i];
    const discount= (pret- procentReducere)/100;
    const pretRedus= pret-reducereMare;

    if (grupariArticole[brand]=== undefined){
        grupariArticole[brand]={
            suma:pretRedus,
            numarArticol:1
        };
    }

    else {
        grupariArticole[brand].suma+= pretRedus;
        grupariArticole[brand].numarArticol++
    }
}

const branduri= Object.keys(grupariArticole);
 for (let i=0; i< BAZA_DE_DATE.length; i++) {
    const brand=branduri[i];
    const { suma, numarArticol}= grupariArticole[brand];

    const medie = suma / numarArticol;
    console.log(`${brand}: ${medie.toFixed(2)}`)
 }