const DIMENSIUNE_ESANTION = 1500;
const MARCI = ["BMW", "Audi", "Opel", "Dacia", "Toyota", "Honda", "Subaru"];
const TRANSMISII = ["Automata", "Manuala"];
const COMBUSTIBIL = ["Benzia", "Motorina", "Electrica"];

/* MASINA
    {
        marca: string;
        transmisie: string;
        combustibil: string;
        pretCumparare: number;
        pretVanzare: number;
        capacitateCilindrica: number;
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
    
    const masina = {
        marca: MARCI[indexMarca],
        transmisie: TRANSMISII[indexTransmisie],
        combustibil: COMBUSTIBIL[indexCombustibil],
        pretCumparare: pretCumparare,
        pretVanzare: pretVanzare,
        capacitateCilindrica: cc
    };

    bazaDeDate.push(masina)
}

console.log(bazaDeDate);

