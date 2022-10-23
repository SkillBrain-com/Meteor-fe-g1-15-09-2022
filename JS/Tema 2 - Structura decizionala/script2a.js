console.log(`Tema 2 - Structura decizionala`);
console.log(`Exercitiul 2a`);

const x = 12345;
const lungimeNumar = x.toString().length;

if(lungimeNumar < 3) {
    console.log(`${x} are mai putin de 3 cifre`);
    }
else if(lungimeNumar >= 3 && lungimeNumar <=5  && x % 2 === 0) {
    console.log(`${x} este par si are intre 3 si 5 cifre`);
    }
else if(lungimeNumar >= 3 && lungimeNumar <=5  && x % 2 === 1) {
    console.log(`${x} este impar si are intre 3 si 5 cifre`);
}
else {
    console.log(`${x} are mai mult de 5 cifre`);
}
