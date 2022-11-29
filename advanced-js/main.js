/* PASS PRIMITIVE BY VALUE */
function pureFunction(primitiveValue) {
    primitiveValue += 10;
    console.log(primitiveValue);
}

// let x = 20;
// pureFunction(x);
// console.log(x);

/* PASS NON-PRIMITIVE(OBJECT) BY REFRENCE */
function pureFunctionWithNonPrimitive(lista) {
    lista.push(10); // [5,10]
    console.log(lista);
}

/* PASS NON-PRIMITIVE(OBJECT) BY REFRENCE WITHOUT SIDE EFFECTS */
function pureFunctionWithNonPrimitiveWithoutSideEffect(lista) {
    const listaNoua = [];

    //deep clone
    //clonam lista originala(adica creem o lista nou ais copiem elmenet cu elmenet)
    for (let i = 0;i < lista.length;i++) {
        listaNoua.push(lista[i]);
    }

    listaNoua.push(10);
    console.log(listaNoua);
}

let lista = [5];
// pureFunctionWithNonPrimitive(lista);
// pureFunctionWithNonPrimitiveWithoutSideEffect(lista);
// console.log(lista);

//ES5
const f1 = function() {};

//ES6
const f2 = () => {};

//ES5
// function square(nr) {
//     return nr * nr;
// }

//ES6
// const square = (nr) => nr * nr;

/* HIGH ORDER FUNCTIONS */
const sum = (a, b) => a + b;
const times = (a, b) => a * b;
const doOperation = (operand1, operand2, operation) => operation(operand1, operand2);

const sumOfNumbers = doOperation(10,10, sum);
const productOfNumbers = doOperation(10,10, times);
// console.log(sumOfNumbers);
// console.log(productOfNumbers);
// console.log(doOperation(10, 10, (a, b) => a * 2 + b * 4));


const isEven = (value) => value % 2 === 0
const myFilter = (value) => value.startsWith("A") && value.includes("@");

/*filterFunction(value: any) => boolean */
const checkFilter = (value, filterFunction) => filterFunction(value);

// console.log(checkFilter(10, isEven));
// console.log(checkFilter("AhelloWorld@", myFilter));


/* MAP - transforma fiecare element intr-o valoare noua*/

function creeazaListaPatrate(listaNumere) {
    const listaNoua = [];
    for(let i = 0;i < listaNumere.length; i++) {
        const patrat = listaNumere[i] * listaNumere[i];
        listaNoua.push(patrat);
    }

    return listaNoua;
}

function exempluMap(){    
    const listaNumere = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const listaNoua = creeazaListaPatrate(listaNumere);
    
    //map creeaza intern o lista noua si o returneaza
    const listaNouaMap = listaNumere.map((x) => x * x); 

    // console.log(listaNoua);
    console.log(listaNouaMap);
}

// exempluMap();

/* FOREACH */

function exempluForEach(){
    const listaNumere = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // for (let i = 0;i < listaNumere.length; i++) {
    //     console.log(listaNumere[i]);
    // }

    //forEach nu creeaza o lista cu valorile returnate
    listaNumere.forEach((x) => console.log(x));
}

// exempluForEach();

/* FILTER */

function exempluFilter(){
    const listaNumere = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // const listaNoua = [];
    // for (let i = 0; i < listaNumere.length; i++) {
    //     if (listaNumere[i] % 2 === 0) {
    //         listaNoua.push(listaNumere[i]);
    //     }
    // }
    // console.log(listaNoua);
    const listaNoua = listaNumere.filter((x) => x % 2 === 0);
    console.log(listaNoua);
}

// exempluFilter();

function exempluFilterMatrix(){
    const matrix = [
        [1, 0, 0 ,0, 0], // [1]
        [0, 0, 0 ,0, 1], // [1]
        [0, 0, 0 ,1, 0], // [1]
        [0, 0, 0 ,0, 0], // []
        [0, 1, 0 ,0, 0], // [1]
    ];

    const matriceFiltrata = matrix.filter((rand) => {
        const listaFiltrata = rand.filter((el) => el === 1);
        return listaFiltrata.length > 0;
    });

    console.log(matriceFiltrata) ;
}

// exempluFilterMatrix();

/* CHAINING */

function chainingExample(){
    const listaNumere = [1, 3, 3, 2, 5, 1, 7, 2, 4, 11];

    // o noua lista, care contine
    // doar patratul elmenetelor care
    // au patratul mai mare decat 4

    // const listaNoua = [];
    // for (let i = 0; i < listaNumere.length; i++) {
    //     const patrat = listaNumere[i] * listaNumere[i];
    //     if (patrat > 4) {
    //         listaNoua.push(patrat);
    //     }
    // }
    // console.log(listaNoua);

    const listaNoua = listaNumere
        .map((nr) => nr * nr)
        .filter((patrat) => patrat > 4)
        .map((patratFiltrat) => patratFiltrat * 10);

    console.log(listaNoua);
}

// chainingExample();

/* EVERY */

function exempluEvery(){
    const listaNumere = [1, 3, 3, 2, 5, 1, 7, 2, 4, 11];

    // let suntToatePare = true;
    // for (let i = 0; i < listaNumere.length; i++) {
    //     if (listaNumere[i] % 2 !== 0) {
    //         suntToatePare = false;
    //     }
    // }

    //returneaza un boolean true daca toate elementele respecta conditia altfel false
    const suntToatePare = listaNumere.every((nr) => nr % 2 === 0);
    console.log(suntToatePare);
}

// exempluEvery();
/* SOME */
function exempluSome(){
    const listaNumere = [1, 3, 3, 2, 5, 1, 7, 2, 4, 11];

    // let existaCelPutinUnNumarPar = false;
    // for (let i = 0; i < listaNumere.length; i++) {
    //     if (listaNumere[i] % 2 === 0) {
    //         existaCelPutinUnNumarPar = true;
    //     }
    // }

    //returneaza un boolean true daca cel putin un element respecta conditia altfel false
    const existaCelPutinUnNumarPar = listaNumere.some((nr) => nr % 2 === 0);
    console.log(existaCelPutinUnNumarPar);
}
// exempluSome();

/* FIND */
function exempluFind(){
    // const listaNumere = [1, 3, 3, 2, 5, 1, 7, 2, 4, 11];
    const listaAngajati = [
        {
            nume: "Paul",
            dep: "Vanzari"
        },
        {
            nume: "Vlad",
            dep: "Tehnic"
        },
        {
            nume: "Mirela",
            dep: "Vanzari"
        },
        {
            nume: "Eugen",
            dep: "Paza"
        },
    ]

    // let elementCautat;
    // for (let i = 0; i < listaNumere.length; i++) {
    //     if (listaNumere[i] % 2 === 0) {
    //         elementCautat = listaNumere[i];
    //         break;
    //     }
    // }

    // const elementCautat = listaNumere.find((x) => x % 2 === 0);
    // const elementCautat = listaAngajati.find((angajat) => angajat.dep === "Vanzari");
    const elementCautat = listaAngajati.find((angajat) => angajat.nume.startsWith("M") && angajat.dep === "Vanzari");

    console.log(elementCautat);
}

// exempluFind();

/* FIND INDEX */

function exempluFindIndex(){
    const listaAngajati = [
        {
            nume: "Paul",
            dep: "Vanzari"
        },
        {
            nume: "Vlad",
            dep: "Tehnic"
        },
        {
            nume: "Mirela",
            dep: "Vanzari"
        },
        {
            nume: "Eugen",
            dep: "Paza"
        },
    ];

    // let elementCautat;
    // for (let i = 0; i < listaNumere.length; i++) {
    //     if (listaNumere[i] % 2 === 0) {
    //         elementCautat = i;
    //         break;
    //     }
    // }
    const elementCautat = listaAngajati.findIndex((angajat) => angajat.nume.startsWith("M") && angajat.dep === "Vanzari");

    console.log(elementCautat);
}

// exempluFindIndex();

/* REDUCE */

function exempluReduce(){
    const listaNumere = [1, 3, 3, 2, 5, 1, 7, 2, 4, 11];
    const listaAngajati = [
        {
            nume: "Paul",
            dep: "Vanzari",
            puncteAngajat: 10,
        },
        {
            nume: "Vlad",
            dep: "Tehnic",
            puncteAngajat: 11,
        },
        {
            nume: "Mirela",
            dep: "Vanzari",
            puncteAngajat: 19,
        },
        {
            nume: "Eugen",
            dep: "Paza",
            puncteAngajat: 8,
        },
    ];
    // let suma = 0;
    // for(let i=0; i < listaNumere.length; i++) {
    //     suma += listaNumere[i];
    // }

    // const suma = listaNumere.reduce((valAnteriora, x) => valAnteriora + x, 0);
    const sumaPuncte = listaAngajati.reduce((valAnteriora, angajat) => valAnteriora + angajat.puncteAngajat, 0);
    
    console.log(suma);
    console.log(sumaPuncte);
}

// exempluReduce();

function exempluRaport() {
    const listaAngajati = [
        {
            nume: "Paul",
            dep: "Vanzari",
            salariuNet: 2000,
        },
        {
            nume: "Vlad",
            dep: "Tehnic",
            salariuNet: 3000,
        },
        {
            nume: "Mirela",
            dep: "Vanzari",
            salariuNet: 2500,
        },
        {
            nume: "Eugen",
            dep: "Paza",
            salariuNet: 1000,
        },
    ];

    //cat de multi bani se vor aloca in urmatoare 12 luni pentru angajatii din departamentul vanzari
    //presupunem ca salariu brut = 2 * salariuNet

    const result = listaAngajati
        .filter((angajat) => angajat.dep === "Vanzari")
        .map((angajatVanzari) => angajatVanzari.salariuNet * 24)
        .reduce((total, salariuBrut) => total + salariuBrut, 0);

    console.log(result);
}

exempluRaport();







