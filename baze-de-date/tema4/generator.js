/* Aici este functia generatoare care a fost folosita pentru a crea datele din db.js */
const DIMENSIUNE_ESANTION = 25;
const ORASE = ["BRASOV", "BUCURESTI", "IASI", "CALARASI", "CONSTANTA"];

/* 
    STATIE
    {
        nume: string;
        estimatSosire: number[];

        //fiecare numar reprezinta ora zilei in minute
        // exemplu ora 8:00 -> 8 * 60 + 0 = 480
        // ora 8:30 -> 8 * 60 + 30 = 510
        // pentru a transforma din numar in ora 
        // const ora = Math.round(510 / 60)
        // const minute = 510 % 60 = 30
    }
*/

/* 
    LINIE_AUTOBUZ
    {
        numarLinie: number;
        capacitatePasageri: number;
        statii: STATIE[];
    }
*/
const bazaDeDate = [];

for(let i = 0; i < DIMENSIUNE_ESANTION; i++) {
    //Math.random() -> genereaza un numar cu virgula intre 0 si 1
    //Math.random() * 1000 -> genereaza un numar cu virgula intre 0 si 1000
    //Math.round(Math.random() * 1000) -> genereaza un numar fara virgula intre 0 si 1000
    //Math.round(Math.random() * (MARCI.length - 1)) -> genereaza o pozitie la intamplare a unui element din lista MARCI
    const indexMarca = Math.round(Math.random() * (MARCI.length - 1));
    const indexTransmisie = Math.round(Math.random() * (TRANSMISII.length - 1));
    const indexCombustibil = Math.round(Math.random() * (COMBUSTIBIL.length - 1));

    const pretCumparare = Math.random() * 10000 + 1000;
    const pretVanzare = pretCumparare + Math.random() * 5000 + 1000;
    const cc = Math.round(Math.random() * 4000 + 1000);
    
    const indexNumeDealer = Math.round(Math.random() * (DEALERI.length - 1));
    const indexOras = Math.round(Math.random() * (ORASE.length - 1));

    const masina = {
        marca: MARCI[indexMarca],
        transmisie: TRANSMISII[indexTransmisie],
        combustibil: COMBUSTIBIL[indexCombustibil],
        pretCumparare: pretCumparare,
        pretVanzare: pretVanzare,
        capacitateCilindrica: cc,
        dealer: {
            nume: DEALERI[indexNumeDealer],
            oras: ORASE[indexOras]
        }
    };

    bazaDeDate.push(masina)
}