// 1. De ce să plătești un ghicitor când poți doar să-ți programezi singur averea?

// Stocați următoarele în variabile: numărul de copii, numele partenerului, locația geografică, titlul postului.
// Afișează-ți averea pe ecran așa: „Veți fi un X în Y și căsătorit cu Z și cu N copii”.

// const numarulDeCopii, numelePartenerului, locatiaGeografica, titluiPostului;

// numarulDeCopii = 3;
// numelePartenerului = "Ben";
// locatiaGeografica = "Italia";
// titluiPostului = "programmer";

// const viitor = (`Veti fi un ${titluiPostului} in ${locatiaGeografica} si casatorita cu ${numelePartenerului} si 
// veti avea ${numarulDeCopii}`)
 
// console.log(viitor)


// 2. Calculatorul de aprovizionare pe viață
// Te-ai întrebat vreodată cât este o „rezervă pe viață” din gustarea ta preferată? Nu te mai mira!

// Stocați vârsta dvs. actuală într-o variabilă.
// Stocați o vârstă maximă într-o variabilă.
// Stocați o cantitate estimată pe zi (sub formă de număr).
// Calculați câte ați mânca în total pentru tot restul vieții.
// Afișați rezultatul pe ecran astfel: „Veți avea nevoie de NN pentru a vă dura până la bătrânețea lui X”.


// const age = 21;
// const maxage = 100;
// const turtaDulce = 8;

// const totalFoodRestOfLife = (maxage - age) * turtaDulce

// console.log(`Veti avea nevoie de ${totalFoodRestOfLife} pentru a dura pana la batranetea ;lui ${maxage}`)

// 3. Geometrizatorul
// Calculați proprietățile unui cerc, folosind definițiile de aici.
// Stocați o rază într-o variabilă.
// Calculați circumferința pe baza razei și afișați „Circumferința este NN”.
// Calculați aria pe baza razei și scoateți „Zona este NN

// const raza = 10
// const circumferinta = Math.PI * 2*raza; 
// console.log(`Circumferinta este ${circumferinta}`); 
// var area = Math.PI * raza*raza; 
// console.log(`Zona este ${area}`);


// 4. Convertorul de temperatură
 //E cald afară! Să facem un convertor pe baza pașilor de aici  https://www.mathsisfun.com/temperature-conversion.html

// Stocați o temperatură celsius într-o variabilă.
// Convertiți-l în fahrenheit și scoateți „NN°C este NN°F”.
// Acum stocați o temperatură Fahrenheit într-o variabilă.
// Convertiți-l în celsius și afișați „NN°F este NN°C”.


// const celsius = 30;
// const celsiusInF = (celsius*9)/5 + 32; 
// console.log(celsius + '°C este ' + celsiusInF + '°F'); 
// const fahrenheit = 20; 
// const fahrenheitInC = ((fahrenheit - 32)*5)/9; 
// console.log(fahrenheit + '°F este ' + fahrenheitInC + '°C');

// 5. Exercițiu
// 1. Definiți o funcție greet care returnează valoarea 'Haydo!'.
// 2. Declarați o variabilă salutation. Apelați funcția greet și 
// atribuiți rezultatul apelului variabilei salutation.

// function greet () {
//    return 'Haydo!';
// }
// let salutation = greet ();

// 6. scrieți o funcție echo care returnează și parametrul transmis
// echo('Greta')ar trebui să se întoarcă 'Greta'și echo('CO2')să se întoarcă'CO2
// function echo('Greta') {
//    return Greta
// }
//  function echo('CO2') {
//    return CO2
//  }

// 7. Exercițiu
// Ce valoare are x după executarea următorului cod?
//  function reply(phrase) {
//    return phrase;
//  }

//  let x = reply('How do you do?');

//  raspuns   'how do you do?'


// 8. Scrieți o funcție greet având un parametru și returnând 'Hello <parameter>!'.

// Exemplu: greet('Ada')ar trebui să se întoarcă 'Hello Ada!'
// și greet('Grace')ar trebui să se întoarcă 'Hello Grace!'.

// function greet (name){
//    return 'hello' + name +'!';
// }

// 9. Ce valoare xare după executarea următorului cod?
// function whereIs(name) {
//   return 'Where is ' + name + '?';
// }

// let x = whereIs('Jacky');
// 'WhereIs Jacky?

// 10. Ce valoare xare după executarea următorului cod?
// function hi(name) {
//   return 'Hi ' + name + '!';
// }

// let h1 = hi('Selva');
// let h2 = hi('Pola');
// let x = h1 + ' ' + h2;
// Hi Selva! Hi Pola

// 11. Exercițiu
// Scrieți o funcție logcare înregistrează 'Hello Console!'.
// function log() {
//    console.log('Hello Console!')
// }


// 12. Exercițiu
// Scrieți o funcție log, care ia un parametru și înregistrează acest parametru.

// Exemplu: log('Ken Thompson')ar trebui să înregistreze 'Ken Thompson'.
// function log(Holla) {
//    console.log(Holla);
//    }

//   13. Exercițiu
// Scrieți o funcție shoutcare ia un șir și returnează acest șir duplicat. 
// În plus, returnarea ar trebui să fie înregistrată.
// Exemplu: shout('Fire')ar trebui să revină 'FireFire'și ar trebui să 
// înregistreze 'FireFire'.
// function shout(mac) {
//    let result = mac + mac;
//    console.log(result); 
//    return result;
//    }

//  14.  Exercițiu
// Scrieți o funcție lengthcare ia un șir și returnează numărul de caractere ale șirului.

// Exemplu: length('sun')ar trebui să revină 3.

// 15. Exercițiu
// Scrieți o funcție length care ia un șir și returnează numărul de caractere ale șirului.