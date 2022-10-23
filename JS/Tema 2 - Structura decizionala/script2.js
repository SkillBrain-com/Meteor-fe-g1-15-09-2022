console.log(`Tema 2 - Structura decizionala`);
console.log(`Exercitiul 2`);

const n = 123;

    if(n >= 0 && n < 100) {
    console.log(`${n} are mai putin de 3 cifre`);
    }
    
    else if(n >= 100 && n < 100000 && n % 2 === 0) {
    console.log(`${n} este par si are intre 3 si 5 cifre`);
    }
    
    else if(n >= 100 && n < 100000 && n % 2 === 1) {
    console.log(`${n} este impar si are intre 3 si 5 cifre`);
    }

    else if (n >= 100000 ) {
    console.log(`${n} are mai mult de 5 cifre`);
    }

    else {
    console.log(`numarul ${n} nu se incadreaza in nici un criteriu`);
    }

