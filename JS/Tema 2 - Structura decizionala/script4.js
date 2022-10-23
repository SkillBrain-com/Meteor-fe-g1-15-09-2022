console.log(`Tema 2 - Structura decizionala`);
console.log(`Exercitiul 4`);

const text3 = "alexa_werayahoo.com";

const lungimeText3 = text3.length;
//console.log(lungimeText3);

const textContineCaracterul = text3.includes("@");
//console.log(textContineCaracterul);

const primaLiteraText3 = text3.charAt(0);
//console.log(primaLiteraText3);

const aDouaLiteraText3 = text3.charAt(1);
//console.log(aDouaLiteraText3);

if((lungimeText3 > 7 && lungimeText3 < 9) && textContineCaracterul && ((primaLiteraText3 >=0 && primaLiteraText3 <=9) || (aDouaLiteraText3 >= "a" && aDouaLiteraText3 <="z"))) {
    console.log(`true`);
}

    else {
    console.log(`false`);
    }

