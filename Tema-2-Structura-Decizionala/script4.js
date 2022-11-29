const text = "Ciocolata";

const lungimeText = text.length;
console.log (lungimeText);

const textContineLitera = text.includes("o");
console.log(textContineLitera);

const primaLitera = text.charAt(0);
console.log(primaLitera);

const aDouaLitera = text.charAt(1);
console.log(aDouaLitera);

if((lungimeText > 7 && lungimeText < 9) && textContineLitera && ((primaLitera >=0 && primaLitera <=9) || (aDouaLitera >= "a" && aDouaLitera <="z"))) {
    console.log(`true`);
}

    else {
    console.log(`false`);
    }