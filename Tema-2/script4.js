console.log("Exercitiul 4")

const text1= "Hello world";

const lungimeText= text1.length;
const contineLitera= text1.includes("@");
 const primaCifra=text1.charAt(0);
 const aDouaLitera= text1.charAt(1);


 if ( lungimeText ===8 && contineLitera=== true && primaCifra >= "0" && primaCifra <="9" || aDouaLitera >="a" && aDouaLitera <="z"); {
    console.log(` Textul ${text} respecta regulile`);
 }

 console.log (text);
 console.log(lungimeText);
 console.log(contineLitera);
 console.log(primaCifra);
 console.log(aDouaLitera);