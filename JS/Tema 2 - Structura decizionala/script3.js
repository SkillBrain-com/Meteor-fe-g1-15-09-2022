console.log(`Tema 2 - Structura decizionala`);
console.log(`Exercitiul 3`);

const text = "Rares";
const lungimeText = text.length;
console.log(lungimeText);

const primaLitera = text.charAt(0);
console.log(primaLitera);

const ultimaLitera = text.charAt(text.length - 1);
console.log(ultimaLitera);

if((primaLitera >= "a" && primaLitera <= "z" 
    || ultimaLitera >= "0" && ultimaLitera <= "9") 
    && (lungimeText >= 3 && lungimeText <= 5)) {
    console.log(`Textul "${text}" incepe cu o litera mica sau se termina cu o cifra si are intre 2 si 5 caractere`);
    }

    else
    console.log(`Textul "${text}" nu respecta regulile`);



///////////////////////////////////

const text2 = "Acesta este un text";

const lungimeText2 = text2.length;
//console.log(lungimeText2);

const primaLiteraText2 = text2.charAt(0);
//console.log(primaLiteraText2);

const ultimaLiteraText2 = text2.charAt(text2.length - 1);
//console.log(ultimaLiteraText2);

    if((primaLiteraText2 >= "a" && primaLiteraText2 <= "z" 
    || ultimaLiteraText2 >= "0" && ultimaLiteraText2 <= "9") 
    && (lungimeText2 >= 3 && lungimeText2 <= 5)) {
    console.log(`Textul "${text2}" incepe cu o litera mica sau se termina cu o cifra si are intre 2 si 5 caractere`);
    }
    else {
    console.log(`Textul "${text2}" nu respecta regulile`);
    }

