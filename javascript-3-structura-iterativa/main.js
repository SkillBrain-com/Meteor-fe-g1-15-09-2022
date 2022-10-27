/*
Algoritm in care sa AFISAM un numar cu cel putin 10 cifre si cel mult 1000 de cifre.
Numarul va reprezenta o putere a lui 10; Numarul trebuie sa fie afisat cu toate cifrele.
*/
console.log("Structura itertiva");

const n = 100;
let textNumar = "1";
let contor = 0;

while (contor < n) {
    textNumar += "0";
    console.log(`Contorul este ${contor}`);
    contor++;
}

console.log(textNumar);