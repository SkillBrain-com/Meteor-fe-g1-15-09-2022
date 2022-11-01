console.log("EXERCITIUL 4");

const text2="Hello world";
const lungimeText2=text2.length
const contineLitera=text2.includes("@");
const primaCifra=text2.charAt(0);
const aDouaLitera= text2.charAt(1);

console.log(text2);
console.log(lungimeText2);
console.log(contineLitera); 
console.log(primaCifra);
console.log(aDouaLitera);

if (lungimeText2===8 && primaCifra>="0" && primaCifra<="9"
 || aDouaLitera>="a" && aDouaLitera<="z"){
    console.log(`Textul ${text2} respecta regulile`);
 }
else {
    console.log(`Textul ${text2} nu respecta regulile`);
}
