console.log ("Exercitiul 4");

const text = "Andrada ca de Ana nu imi place";
const contineLiteraF = text.includes("F");
console.log (contineLiteraF);

const lungimeText = text.length;
const primaLitera = text.charAt(0);
const adouaLitera = text.charAt(1);

if (lungimeText >= 1 && lungimeText <= 8) {
  console.log (`da`);
}
else {
  console.log(`nu`);
}

if ((primaLitera <= "0" && primaLitera >= "9") || (adouaLitera >= "a" && adouaLitera <= "z")) {
  console.log (`este`);
}
else {
  console.log (`nici gand`);
}