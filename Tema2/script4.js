const text = "Andrada ca de Ana nu imi place";
const contineLiteraF = text.includes("F");
console.log (contineLiteraF);

const lungimeText = text.length;
const primaLitera = text.charAt(0);
const adouaLitera = text.charAt(1);

if ((lungimeText >= 1 && lungimeText <= 8) && (primaLitera <= "0" && primaLitera >= "9") || (adouaLitera >= "a" && adouaLitera <= "z")) {
  console.log (`da`);
}
