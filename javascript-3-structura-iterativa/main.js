// o functie (in programare) este un programel gata facut, 
// pe care il putem folosi prin ai spune numele urmat de niste paranteze
console.log("Structura itertiva");

//numar la intamplare intre 0 si 10
const secret = Math.round(Math.random() * 10);
let contor = 0;

while (contor !== secret) {
    contor += 1;
}

console.log(`Cred ca secretul era ${contor}`);
console.log(`Secretul este ${secret}`);


