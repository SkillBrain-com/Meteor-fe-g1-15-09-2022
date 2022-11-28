console.log("Tema 5 - ex 3.a")
// Construieste o functie numita selecteazaDupaCantitate care primeste doi parametri
// listaProduse si limita care sa returneze toate produsele din lista primita care au
// cantitatea mai mare decat limita.

function selecteazaDupaCantitate(listaProduse, limita) {
    const listaNoua =[];
    
    for (let i = 0; i < listaProduse.length; i++) {
        const produs = listaProduse[i];
        const {cantitate} = produs;
        if (cantitate > limita){
            listaNoua.push(produs);
        }      
        
    }
    console.log(listaNoua);           
}

selecteazaDupaCantitate(PRODUSE, 49);
selecteazaDupaCantitate(PRODUSE, 100);

console.log("Tema 5 - ex 3.b")
//Construieste o functie numita selecteazaPreturile care primeste un parametru listaProduse care returneaza 
//o noua lista care va contine valoarea fiecarui produs din listaProduse. Valoarea se calculeaza inmultind 
//cantitateaDisponibila cu pretul. In cazul in care functia primeste ca argument o lista goala, va returna 
//o lista goala

function selecteazaPreturile(listaProduse){
    const valoareLista = [];
    for (let i=0; i<listaProduse.length; i++){
        const produse = listaProduse[i];
        const {pret, cantitate} = produse;
        const valoare = pret * cantitate;
        valoareLista.push(valoare);        
    }
    
    console.log(valoareLista);
    
}

selecteazaPreturile(PRODUSE);
selecteazaPreturile([]);

