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

const sum = (a, b) => a + b;
const times = (a, b) => a * b;
const doOperation = (operand1, operand2, operation) => operation(operand1, operand2);

const sumOfNumbers = doOperation(10,10, sum);
const productOfNumbers = doOperation(10,10, times);
console.log(sumOfNumbers);
console.log(productOfNumbers);

console.log(doOperation(10, 10, (a, b) => a * 2 + b * 4));