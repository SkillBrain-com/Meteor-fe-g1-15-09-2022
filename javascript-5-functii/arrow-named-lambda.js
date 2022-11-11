//NAMED FUNCTION - functie cu nume
//ES5 - ES-2015
function sayMyName(name){
    console.log(name);
}

//FUNCTIE LAMBDA - functie fara nume care trebuie salvata intr-o
//variabila pentru a putea fi apelata*

//ARROW FUNCTION
//ES6 - ES-2016+
const sayMyNameArrow = (name) => {
    console.log(name);
}

//STANDARD FUNCTION
const sayMyNameNoName = function(name) {
    console.log(name);
}

const showHelloWorld = () => {
    console.log("Hello world");
};

sayMyName("Diana");
sayMyNameArrow("Cezar");
sayMyNameNoName("Cristian");
showHelloWorld();