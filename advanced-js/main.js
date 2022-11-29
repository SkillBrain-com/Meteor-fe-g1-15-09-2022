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