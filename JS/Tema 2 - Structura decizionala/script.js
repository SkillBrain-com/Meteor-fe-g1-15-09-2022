console.log(`Tema 1 - Structura decizionala`);
console.log(`Exercitiul 1`);


// 1. Creeaza un algoritm care verifica daca un numar este par sau impar. Numarul va fi declarat 
// intr-o variabila
// - Putem verifica daca un numar este par daca estul impartirii lui la 2 este 0, si impar daca restul 
// imapartirii lui la 2 este 1
// - Pentru a verifica restul impartirii unui numar la 2 putem folosi operatorul mod(%)

// acesta este un pseudocod (instructiuni folosind cuvinte obisnuite) 
// ce indica cum ar trebui sa arate algoritmul pentru algoritmul mentionat
// Urmareste acest pseudocod drept indicatie, si tradu instructiunile in javascript
// numar = 123

//rest = numar % 2

//daca (rest este egal cu 0) atunci:
//	afiseaza mesajul "numarul ${numar} este par"
//altfel
	//afiseaza mesajul "numarul ${numar} este impar"

const a = 123;
 
if (a % 2 === 0) {
    console.log(`Numarul ${a} este par`);
}

else {
    console.log(`Numarul ${a} este impar`);
}



