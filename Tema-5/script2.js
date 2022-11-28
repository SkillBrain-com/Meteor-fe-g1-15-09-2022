console.log("Tema 5 - Ex 2")
// Construieste o functie care sa primeasca ca parametrii o lista de nume si o litera. 
// Metoda va returna toate numele din lista care incep cu litera data ca argument.
// In cazul in care nu exista nici un nume care sa respecte regula de mai sus functia returneaza null.
// La final, apelati functia si afisati valoarea returnata de catre functie. 


const list = ["Ana", "Maria", "Luci", "Nicu", "Antonia", "Gica", "Cristina"];

function getNames(nameList, letter) {
    let firstLetterList =[];
    for (let i = 0; i < nameList.length; i++){
        let firstLetter = nameList[i].charAt(0);
        if (firstLetter === letter){
            firstLetterList.push(nameList[i]);
            names = firstLetterList;
        }
        else {
            names = null;                      
        }
    }
      
    console.log(firstLetterList);
}
    getNames(list, "A");
    getNames(list, "C");
    getNames(list, "R");