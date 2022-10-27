// o functie (in programare) este un programel gata facut, 
// pe care il putem folosi prin ai spune numele urmat de niste paranteze
console.log("Structura itertiva");

//numar la intamplare intre 0 si 10
const secret = Math.round(Math.random() * 10);
let guess = 0;
let numarIncercari = 0;

while (guess !== secret) {
    guess = Math.round(Math.random() * 10);
    numarIncercari++;
}

console.log(`Cred ca secretul era ${guess}. Am facut ${numarIncercari} incercari`);
console.log(`Secretul este ${secret}`);
