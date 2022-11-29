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

    console.log(listaNoua);
    console.log(listaNouaMap);
}

exempluMap();



/* FOREACH */

/* FILTER */

/* EVERY */

/* SOME/ANY */

/* REDUCE */








