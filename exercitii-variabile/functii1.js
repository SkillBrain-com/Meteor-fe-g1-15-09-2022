// 1. Ghicitorul
// De ce să plătești un ghicitor când poți doar să-ți programezi singur averea?

// Scrieți o funcție numită tellFortune astfel:
// are 4 argumente: numărul de copii, numele partenerului, locația geografică, titlul postului.
// vă arată averea pe ecran astfel: „Veți fi un X în Y și căsătorit cu Z cu N copii”.
// Apelați acea funcție de 3 ori cu 3 valori diferite pentru argumente.

let numarulDeCopii, numelePartenerului, locatiaGeografica, titluiPostului;

function tellFortune ( titluiPostului, locatiaGeografica,numelePartenerului,numarulDeCopii, ) {
   let viitor = (`"Veti fi un ${titluiPostului} in ${locatiaGeografica} si 
casatorita cu ${numelePartenerului} cu ${numarulDeCopii} copii `)
console.log(viitor)
}
tellFortune('frontend dev', 'Monaco', 'Cristian', 4);
tellFortune('backend de', 'Bali', 'Robert', 3);
tellFortune('fullstack dev' , 'Dubai', 'Ben' ,5)

// imi ia ordinea din function tellFortune. Nu din variabila pe care am declarat-o eu "viitor"
// Conteaza ordinea


// 2. Calculatorul de vârstă a cățelului
// Știi câți ani are câinele tău în anii umani, dar cum rămâne cu anii câinelui? Calculeaza-l!

// Scrieți o funcție numită calculateDogAge astfel:
// are 1 argument: vârsta cățelușului tău.
// calculează vârsta câinelui dvs. pe baza ratei de conversie a 1 an uman la 7 ani câine.
// afișează rezultatul pe ecran astfel: „Câinele tău are NN ani în ani de câine!”
// Apelați funcția de trei ori cu seturi diferite de valori.
// Bonus : Adăugați un argument suplimentar la funcția care ia rata de conversie a anilor om în câine


function calculateDogAge(varstaCaineluiTau) {
    let dogYears = 7 * varstaCaineluiTau
    console.log(`Cainele tau are ${dogYears} ani in ani de caine`);
}

calculateDogAge(5);
calculateDogAge(3);
calculateDogAge(8);

// Calculatorul de aprovizionare pe viață
// Te-ai întrebat vreodată cât este o „rezervă pe viață” din gustarea ta preferată? Nu te mai mira!

// 3. Scrieți o funcție numită calculateSupply astfel:
// are 2 argumente: vârsta, cantitatea pe zi.
// calculează cantitatea consumată pentru restul vieții (pe baza unei vârste maxime constante).
// afișează rezultatul pe ecran astfel: „Veți avea nevoie de NN să vă reziste până la bătrânețea
//  lui X”
// Apelați acea funcție de trei ori, transmițând de fiecare dată valori diferite.
// Bonus : Acceptați valori în virgulă mobilă pentru o sumă pe zi și rotunjiți rezultatul
//  la un număr rotund.

function calculateSupply(age,cantPerDay) {
    const maxAge = 80; 
    const totalNeeded = (maxAge-age) * (cantPerDay * 365);
console.log(`Veti avea nevoie de ${totalNeeded} sa va reziste pana la batranetea lui ${maxAge}`)
}

calculateSupply(21,566);
calculateSupply(21,6);
calculateSupply(21,566);



