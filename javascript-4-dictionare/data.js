const DIMENSIUNE_ESANTION = 1500;
const MARCI = ["BMW", "Audi", "Opel", "Dacia", "Toyota", "Honda", "Subaru"];

const marciMasini = [];

for(let i = 0; i < DIMENSIUNE_ESANTION; i++) {
    const lungimeLista = MARCI.length - 1;

    //Math.random() -> genereaza un numar cu virgula intre 0 si 1
    //Math.random() * 1000 -> genereaza un numar cu virgula intre 0 si 1000
    //Math.round(Math.random() * 1000) -> genereaza un numar fara virgula intre 0 si 1000
    //Math.round(Math.random() * (MARCI.length - 1)) -> genereaza o pozitie la intamplare a unui element din lista MARCI
    const numarLaIntamplare = Math.round(Math.random() * lungimeLista);
    marciMasini.push(MARCI[numarLaIntamplare]);
}

