const DIMENSIUNE_ESANTION = 2500;
const MARCI = ["BMW", "Audi", "Opel", "Dacia", "Toyota", "Honda", "Subaru", "Matiz"];
const TRANSMISII = ["Automata", "Manuala"];
const COMBUSTIBIL = ["Benzia", "Motorina", "Electrica"];
const DEALERI = ["Bavaria Auto", "Arges auto", "Car Geroge", "Mihai Carss","Clean Cars Brasov"];
const ORASE = ["BRASOV", "BUCURESTI", "IASI", "CALARASI", "CONSTANTA"];

/* MASINA - dictionar - object - json(JavaScript Object Notation) - jsol (JavaScript Object Literal)
    {
        marca: string;
        transmisie: string;
        combustibil: string;
        pretCumparare: number;
        pretVanzare: number;
        capacitateCilindrica: number;
        dealer: {
            nume: string;
            oras: string;
        }
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

console.log(bazaDeDate)