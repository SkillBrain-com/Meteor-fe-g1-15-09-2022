/*MODEL*/
let sumaTotala = 0;
let sumaSelectata = 0;
let listaCheltuieli = [];

/*VIEW - SELECTORS*/
const inputValCheltuiala = document.querySelector("#inputValCheltuiala");
const inputNumeCheltuiala = document.querySelector("#inputNumeCheltuiala");
const butonAdaugaCheltuiala = document.querySelector("#butonAdaugaCheltuiala");
const textTotalCheltuieli = document.querySelector("#textTotalCheltuieli");
const textCheltuieliSelectate = document.querySelector("#textCheltuieliSelectate");
const elementListaCheltuieli = document.querySelector("#elementListaCheltuieli");


/*Functii utilitare*/
function sumaListaCheltuieli(listaCheltuieli) {
    let suma = 0;
    for (let i = 0; i < listaCheltuieli.length; i++) {
        suma += listaCheltuieli[i].valoare;
    }
    return suma;
}

function sumaListaCheltuieliSelectate(listaCheltuieli) {
    let suma = 0;
    for (let i = 0; i < listaCheltuieli.length; i++) {
        if (listaCheltuieli[i].selected === true) {
            suma += listaCheltuieli[i].valoare;
        }
    }
    return suma;
}

/*CONTROLER*/
function adaugaCheltuiala() {
    const textCheltuiala = inputValCheltuiala.value;
    const valoareCheltuiala = Number(textCheltuiala);

    const textNumeCheltuiala = inputNumeCheltuiala.value;

    const cheltuiala = {
        nume: textNumeCheltuiala,
        valoare: valoareCheltuiala,
        selected: false,
    };

    listaCheltuieli.push(cheltuiala);
    sumaTotala = sumaListaCheltuieli(listaCheltuieli);

    inputValCheltuiala.value = "";
}

function selecteazaCheltuiala(indexCheltuiala) {
    const isSelected = listaCheltuieli[indexCheltuiala].selected;
    listaCheltuieli[indexCheltuiala].selected = !isSelected;
    sumaSelectata = sumaListaCheltuieliSelectate(listaCheltuieli);
}


/*VIEW - RENDER*/
function display() {
    textTotalCheltuieli.innerText = `TOTAL: ${sumaTotala}`;
    textCheltuieliSelectate.innerText = `Selected: ${sumaSelectata}`;

    elementListaCheltuieli.innerHTML = "";
    for (let i = 0; i < listaCheltuieli.length; i++) {
        const liElement = document.createElement('li');
        liElement.innerText = `${listaCheltuieli[i].nume} -> ${listaCheltuieli[i].valoare} lei`;

        if (listaCheltuieli[i].selected === true) {
            liElement.classList.add("selected");
        }
        else {
            liElement.classList.remove("selected");
        }

        liElement.addEventListener("click", function () {
            selecteazaCheltuiala(i);
            display();
        });
        elementListaCheltuieli.appendChild(liElement);
    }
}

/*VIEW - ENVET LISTENRS*/
butonAdaugaCheltuiala.addEventListener("click", function () {
    adaugaCheltuiala();
    display();
});
