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
    - valoarea minima de retragere este de 5 lei.
 Extra:
- Asigura-te ca interfata este potrivita si pentru telefonul mobil si tablete(ecrane mai mici). 
  Ghideaza-te dupa designul de mai jos
- In momentul in care utilizatorul scrie o suma aceasta se va afisa in interiorul butonului. 
  In caz ca valoarea este invalida se butonul va avea culoarea gri, indicand faptul ca este dezactivat. 
  De asemenea se va afisa si mesajul de eroare sub input.*/

let sumaDisponibila = document.querySelector(".suma_disponibila");
let valoare = document.querySelector(".valoare");
let retragere = document.querySelector(".retragere");
let errorText = document.querySelector(".errorText");
sumaDisponibila.innerText = 500;
//let sold = Number(sumaDisponibila.value);
//Math.ceil(Math.random() * 1000);

let sumaRamasa = 0;
let soldNou = 0;
function retragereBani(sold, sumaRetragere) {
  sold = sumaDisponibila.innerText;
  if (sumaRetragere == " ") {
    errorText.innerText = "campul nu poate fi gol";
  } else if (sumaRetragere < 5) {
    errorText.innerText = "suma retrasa nu poate fi mai mica de 5 lei";
  } else if (sumaRetragere > sold) {
    errorText.innerText =
      "suma retrasa nu trebuie sa depaseasca suma disponibila";
  } else if (sumaRetragere <= sold && sumaRetragere > 4) {
    sumaRamasa = sold - sumaRetragere;
    //console.log(sumaRamasa);
    soldNou = sumaRamasa;
    sold = soldNou;
    sumaDisponibila.innerText = sold;
    document.querySelector(".valoare").value = null;
  }
}
retragereBani(sumaDisponibila, valoare);

retragere.addEventListener("click", function () {
  let valoareIntrodusa = Number(valoare.value);
  const rezultat = retragereBani(sumaDisponibila, valoareIntrodusa);
});

valoare.addEventListener("keyup", () => {
  if (
    valoare.value.length === 0 ||
    valoare.value < 5 ||
    valoare.value > sumaDisponibila.value
  )
    retragere.disabled = true;
  else retragere.disabled = false;
});
