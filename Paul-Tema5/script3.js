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
]

// a) Construieste o functie numita selecteazaDupaCantitate care primeste doi parametri listaProduse si limita care sa returneze toate produsele din lista primita care au cantitatea mai mare decat limita.

function sortByQuantity (listaProduse, limita) {
  const sortedList = [];
  for (let i = 0; i < listaProduse.length; i ++) {
    const control = listaProduse[i];
    if (control.cantitate > limita) {
       sortedList.push(control);
       console.log(control);
    }
  }
}
sortByQuantity(PRODUSE , 1)

//b) Construieste o functie numita selecteazaPreturile care primeste un parametru listaProduse care returneaza o noua lista care va contine valoarea fiecarui produs din listaProduse. Valoarea se calculeaza inmultind cantitateaDisponibila cu pretul.
//In cazul in care functia primeste ca argument o lista goala, va returna o lista goala;

function selecteazaPreturile (listaProduse) {
    const newList = [];
    for (let i = 0; i < listaProduse.length; i ++) {
      const control = listaProduse[i];
      const quantity = control.cantitate;
      const price = control.pret;
      const value = price * quantity;
      newList.push(value);
    }
    console.log(newList);
  }
  selecteazaPreturile(PRODUSE);

