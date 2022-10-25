let numar = 99;

if (numar < 100) { write = `numarul ${numar} are mai putin de 3 cifre`; }
else {
    if (numar < 100000) {
        if (numar % 2 === 0) {
            write = `numarul ${numar} este par si are intre 3 si 5 cifre`;
        }
        else {
            write = `numarul ${numar} este impar si are intre 3 si 5 cifre`;
        }
    }
    else {
        write = `numarul ${numar} are peste 5 cifre`;
    } 
}
console.log(write);