console.log("EXERCITIUL 4");

const text2="Hello world";
const lungimeText2=text2.length;
const contineLitera=text2.includes("@");
const primaCifra=text2.charAt(0);
const aDouaLitera= text2.charAt(1);

if (lungimeText2===8 && primaCifra>="0" && contineLitera==="@" && primaCifra<="9"
 || aDouaLitera>="a" && aDouaLitera<="z"){
    console.log(`Textul ${text2} respecta regulile`);
 }
else {
    console.log(`Textul ${text2} nu respecta regulile`);
}
