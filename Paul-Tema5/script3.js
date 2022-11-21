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

