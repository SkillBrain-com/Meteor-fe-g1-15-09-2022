/* Functionalitati:

- Suma disponibila in depozit va fi una arbitrara, si va reprezenta 
un numar stocat intr-o variabila modificabila
- In momentul in care utilizatorul apasa pe retragere si suma 
este valida, valoarea din cont se va modifica si va fi afisata
- Utilizatorul poate scrie suma dorita folosind virgula sau 
punctul pentru zecimale
- La retragere se vor verifica criteriile de mai jos. In caz ca 
un criteriu nu este validat se va afisa un mesaj de eroare corespunzator:
    - suma retrasa nu trebuie sa depaseasca suma disponibila
    - valoarea introdusa nu trebuie sa contina litere
    - valoarea introdusa nu poate fi negativa
    - valoarea introdusa nu poate fi goala
    - valoarea minima de retragere este de 5 lei */

let sumaDisponibila = document.querySelector(".suma_disponibila");
sumaDisponibila.innerText = Math.ceil(Math.random() * 1000);

let retragere = document.querySelector(".retragere").value;

let sumaRamasa = 0;
function retragereBani(sold, sumaRetragere) {
  if (sumaRetragere < sold) {
    sumaRamasa = sold - sumaRetragere;
    console.log(sumaRamasa);
  } else {
    Error.innerText = "Suma introdusa nu poate depasi suma din cont";
  }
}
retragereBani(sumaDisponibila, retragere);
