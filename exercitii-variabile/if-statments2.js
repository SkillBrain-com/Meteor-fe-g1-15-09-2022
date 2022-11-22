// 1. Ce număr este mai mare?
// Scrieți o funcție numită greaterNum astfel:
// ia 2 argumente, ambele numere.
// returnează orice număr este numărul mai mare (mai mare).
// Apelați acea funcție de 2 ori cu perechi de numere diferite și înregistrați
// rezultatul pentru a vă asigura că funcționează 
// (de exemplu, „Numărul mai mare de 5 și 10 este 10.”).

function greaterNum (num1, num2) {
    if(num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}


// 2. Traducătorul mondial
// Scrieți o funcție numită helloWorld astfel:
// ia 1 argument, un cod de limbă (ex. „es”, „de”, „en”)
// returnează „Hello, World” pentru limba dată, pentru cel puțin 3 limbi.
//  Ar trebui să returneze implicit limba engleză.
// Apelați acea funcție pentru fiecare dintre limbile acceptate și înregistrați
//  rezultatul pentru a vă asigura că funcționează.

function helloWorld (language) {
    if(language === "es"){
        return "Hola, Mudo"
    }
    else if(language === "de") {
        return "Buna, Lume"
    }
    else {
        return "Hello, "
    }
    
 }   

console.log(helloWorld('de'));     /// conteaza doar ce i-am dat eu la final. nu conteaza 
console.log(helloWorld('en'));
console.log(helloWorld('es'));                                       // ordinea de sus


// 3. Atributorul notei
// Scrieți o funcție numită assignGrade astfel:
// ia 1 argument, un scor numeric.
// returnează o notă pentru scor, fie „A”, „B”, „C”, „D”, fie „F”.
// Apelați acea funcție pentru câteva scoruri diferite și înregistrați rezultatul 
// pentru a vă asigura că funcționează.

function assignGrade (grade) {
    if(grade > 90) {
        return "A"
    }
    else if(grade > 80) {
        return "B"
    }
    else if(grade > 70) {
        return "C"
    }
    else if(grade > 60) {
        return "D"
    }
    else {
        return "F"
    }
    
}
console.log('Ai un ' + assignGrade(95));
console.log('Ai un ' + assignGrade(65));

// 4. Pluralizatorul
// Scrieți o funcție numită pluralize astfel:
// ia 2 argumente, un substantiv si un numar.
// returnează numărul și forma pluralizată, cum ar fi „5 pisici” sau „1 câine”.
// Apelați acea funcție pentru câteva scoruri diferite și înregistrați rezultatul 
// pentru a vă asigura că funcționează.
// Bonus: Fă-l să se ocupe de câteva substantive colective precum „oaie” și „gâște”.

function pluralize (subst, num) {
    if(num !=1 && subst != "oaie" && subst !="gaste" ){
        return (`${num} ' ' ${subst} + "s"`)
    }
    else{
        return(`${num} ' ' ${subst} `)
    }
}

console.log(`Am ` + pluralize ("cat", 0))
console.log(`Am ` + pluralize ("cat", 1))
console.log(`Am ` + pluralize ("cat", 2))


// function pluralize(substantiv, numar) {
//     if (numar != 1 && substantiv != "oaie" && substantiv != "gâște") {
//         return numar  + ' ' + substantiv + 's';
//     } else {
//          return numar + ' ' + substantiv;
//     }
// }
// console.log('Am ' + pluralize('cat', 0));
// console.log('Am ' + pluralize('cat', 1));
// console.log('Am ' + pluralize('cat', 2));
 


