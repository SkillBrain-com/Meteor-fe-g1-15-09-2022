console.log(`Tema 5 - Apelarea functiilor`);
console.log(`Exercitiul 3a`);

/* 3. Se da o lista de produse aflate in gestiunea unui supermarket. 
Un produs este definit de nume, pret, cantitate disponibila. 
Declara functii pentru cerintele de mai jos si apoi apeleaza-le pentru a le testa.
Verifica daca ai acoperit toate cazurile.*/

const PRODUSE = [
  {
    nume: "Apa",
    pret: 7,
    cantitate: 1,
  },
  {
    nume: "Mure",
    pret: 11,
    cantitate: 12,
  },
  {
    nume: "Ciocolata",
    pret: 20,
    cantitate: 0,
  },
  {
    nume: "Gem",
    pret: 15,
    cantitate: 50,
  },
  {
    nume: "Prune",
    pret: 12,
    cantitate: 0,
  },
  {
    nume: "Banane",
    pret: 11,
    cantitate: 13,
  },
];

/*a) Construieste o functie numita selecteazaDupaCantitate care primeste 
doi parametri listaProduse si limita care sa returneze toate produsele 
din lista primita care au cantitatea mai mare decat limita. */

function selecteazaDupaCantitate(listaProduse, limita) {
  let listaProdusePesteLimita = [];
  for (let i = 0; i < listaProduse.length; i++) {
    if (listaProduse[i].cantitate > limita) {
      listaProdusePesteLimita.push(listaProduse[i]);
    }
  }
  const rezultat = listaProdusePesteLimita;
  console.log(rezultat);
}
selecteazaDupaCantitate(PRODUSE, 10);

//////////////////////////////////////////////////////////////////////////////////////////////

console.log(`Tema 5 - Apelarea functiilor`);
console.log(`Exercitiul 3b`);

/* b) Construieste o functie numita selecteazaPreturile care primeste un parametru 
listaProduse care returneaza o noua lista care va contine valoarea fiecarui produs din 
listaProduse. Valoarea se calculeaza inmultind cantitateaDisponibila cu pretul.
In cazul in care functia primeste ca argument o lista goala, va returna o lista goala; */

function selecteazaPreturile(listaProduse) {
  let totalPret = [];
  for (let i = 0; i < listaProduse.length; i++) {
    let valoareTotalaProdus = listaProduse[i].pret * listaProduse[i].cantitate;
    totalPret.push(valoareTotalaProdus);
  }
  console.log(totalPret);
}
selecteazaPreturile(PRODUSE);

//////////////////////////////////////////////////////////////////////////////////////////

console.log(`Tema 5 - Apelarea functiilor`);
console.log(`Exercitiul 3c`);

/* c) Construieste o functie numita calculeazaValoareMedie care primeste un parametru
listaProduse. Functia va returna media valorii totale a produselor care au cantitatea
mai mare ca 0.
In cazul in care listaProduse este goala sau nu are nici un produs cu cantitatea mai
mare ca 0 va returna valoarea 0. Foloseste functiile de la punctele a si b pentru
a reduce codul scris. */

function calculeazaValoareMedie(listaProduse) {
  let medieProduseCuStoc = 0;
  let nrProduseCuStoc = 0;
  for (let i = 0; i < listaProduse.length; i++) {
    const produs = listaProduse[i];
    const { pret, cantitate } = produs;
    if (cantitate > 0) {
      const value = pret * cantitate;
      medieProduseCuStoc += value;
      nrProduseCuStoc++;
    }
  }
  return medieProduseCuStoc / nrProduseCuStoc;
}
const valoareMedie = calculeazaValoareMedie(PRODUSE);
console.log(valoareMedie);
