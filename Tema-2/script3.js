console.log ('Exercitiul 3')


const text= " Acesta e un text";

const lungimeText1= text.length;
const primaLitera1= text.charAt(0);
const ultimaLitera1= text.charAt(text.length);

if ( primaLitera1 >= "a"  && 
primaLitera1 <= "z" || ultimaLitera1 >= "0" && ultimaLitera1 <="9" && lungimeText1 >= 3 && lungimeText1 <= 5  ) {
    console.log(`Textul ${text} incepe cu o litera mica sau se termina cu o cifra intre 3 si 5 caractere`)

}
else {
    console.log(`Textul ${text} nu respecta regulile`);

}
console.log(lungimeText1);
console.log(primaLitera1);
console.log(ultimaLitera1);







