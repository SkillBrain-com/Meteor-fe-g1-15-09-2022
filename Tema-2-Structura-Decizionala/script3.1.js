const text = "ciocolata";

const lungimeText = text.length;
const primaLitera = text.charAt(0);
const ultimaLitera = text.charAt(text.length - 1 );

if ((primaLitera >= "a" && primaLitera <= "z") || (ultimaLitera >= "0" && ultimaLitera <= "9") && (lungimeText >= 3 && lungimeText <= 5)) {
  console.log (`textul ${text} incepe cu o litera mica sau se termina altfel`);
}
else {
  console.log (`textul ${text} nu respecta regulile`);
}

