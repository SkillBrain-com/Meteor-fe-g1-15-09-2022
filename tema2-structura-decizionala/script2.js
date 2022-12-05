
console.log(`exercitiul2-2`);

const numar = 123456;
let rest = numar % 2;


if (numar >= 0 && numar < 100) {
    console.log(`numarul${numar}are mai putin de doua cifre`);
}
else if (numar >= 100 && numar < 100000 && numar % 2 === 0) {
    console.log(`numarul ${numar}este par si are intre 3 si 5 cifre`);
}
else if (numar >= 100 && numar < 100000 && numar % 2 === 1) {
    console.log(`numarul ${numar}este impar si are intre 3 si 5 cifre`);
}
else if (numar >= 100000) {
    console.log(`numarul ${numar} are mai mult de 5 cifre`);
}
else {
    console.log(`numarul ${numar}nu se incadreaza in nici un criteriu`);
}