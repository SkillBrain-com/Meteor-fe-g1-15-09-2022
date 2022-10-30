console.log("exercitul 3");

const text= "BMW";
const lungimeText = text.length;
console.log(lungimeText);
const primaLitera = text.charAt(0);
console.log(primaLitera)
const ultimaLitera = text.charAt(text.length - 1);
console.log(ultimaLitera);

if((primaLitera >= "a" && primaLitera <= "z" || ultimaLitera >= "0" && ultimaLitera <= "9") 
    && (lungimeText >= 3 && lungimeText <= 5)) {
    console.log(`Textul "${text}" incepe cu o litera mica sau se termina cu o cifra si are intre 2 si 5 caractere`);
    }
 else
    console.log(`Textul "${text}" nu respecta regulile`);

    
