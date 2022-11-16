console.log(`Tema 5 - Apelarea functiilor`);
console.log(`Exercitiul 1`);
/* 1. Sa se constuiasca o functie care va afisa un mesaj de salutare pentru 
userul logat intr-o aplicatie. Functia va primi ca parametru numele 
utilizatorului si va afisa mesajul "Bine ai venit, ${nume}!" */

function helloMessage() {
  const firstName = "Alexandra";
  const welcomeMessage = "Bine ai venit";
  message = `${welcomeMessage}, ${firstName}!`;
  console.log(message);
}
helloMessage();

///////////////////////////////////////////////////////////////////////
console.log(`Exercitiul 2`);
/* 2.  Construieste o functie care sa primeasca ca parametrii o lista de nume si o litera.
Metoda va returna toate numele din lista care incep cu litera data ca argument.
In cazul in care nu exista nici un nume care sa respecte regula de mai sus functia 
returneaza null. La final, apelati functia si afisati valoarea returnata de catre functie.
Exemplu: 
Pentru lista [Ana, Maria, Luci, Nicu, Antonia, Gica, Cristina] si 
	- litera A functia va returna [Ana, Antonia]
	- litera C functia va returna [Cristina]
	- litera R functia va returna null */

const list = ["Andreea", "Simona", "Lara", "Adina", "Larisa", "Elena", "Iris"];

function nameByInilial(nameList, letter) {
  const returnName = [];
  for (let i = 0; i < nameList.length; i++) {
    let firstLetter = nameList[i].charAt(0);
    if (firstLetter === letter) {
      returnName.push(nameList[i]);
      result = returnName;
    } else if (firstLetter !== letter) {
      if (returnName !== null) {
        result = returnName;
      } else {
        result = null;
      }
    }
  }
  console.log(result);
}
nameByInilial(list, "A");
nameByInilial(list, "D");
nameByInilial(list, "S");
