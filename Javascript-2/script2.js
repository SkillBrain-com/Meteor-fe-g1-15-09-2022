const number = 63482;
let rest = number % 2;
if (number < 100) {
   console.log (`Numarul ${number} are mai putin de doua cifre`); 
}
else if (number < 100000) {
    if (rest === 0) {
        console.log(`Numarul ${number} este par si are intre 3 si 5 cifre`);
    }
    else {
        console.log (`Numarul ${number} nu este par si are intre 3 si 5 cifre`)
    }
}
else {
    console.log(`Numarul ${number} are mai mult de 5 cifre`)
}