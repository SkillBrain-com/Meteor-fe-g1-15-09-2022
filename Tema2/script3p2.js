console.log ("Exercitiul 3 partea a 2 a");

const text = "altceva";

const lungimeText = text.length;
const primaLitera = text.charAt(0);
const ultimaLitera = text.charAt(text.length - 1 );

if ((primaLitera >= "a" && primaLitera <= "z") || (ultimaLitera >= "0" && ultimaLitera <= "9") && (lungimeText >= 3 && lungimeText <= 5)) {
  console.log (`textul ${text} incepe cu o litera mai mica sau se termina cu o cifra si are intre 3 si 5 caractere`);
}
else {
  console.log (`textul ${text} nu respecta regulile`);
}