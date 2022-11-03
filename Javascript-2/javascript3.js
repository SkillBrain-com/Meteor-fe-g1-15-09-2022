console.log("EXERCITIUL 3");

const text="mama";
const lungimeText=text.length;
const primaLitera=text.charAt(0);

const text1="Acesta este un text";
const lungimeText1=text1.length;
const primaLitera1=text1.charAt(0);
const ultimaLitera1=text1.charAt(4);
if (primaLitera1>="a" && primaLitera1<="z" ||
	ultimaLitera1>="0" && ultimaLitera1<="9" &&
	lungimeText1>=3 && lungimeText1<=5){
    console.log(`Textul ${text1} incepe cu o litera mica sau se termina
    cu o cifra si are intre 3 si 5 caractere`);
    }
else {
    console.log(`Textul ${text1} nu respecta regulile`);
}
