const text = "Fall";
const lungimeText = text.length;
const contineLiteraF = text.includes("F");
const primaLitera = text.charAt(0);
const aDouaLitera = text.charAt(1);
const aTreiaLitera = text.charAt(2);
const aPatraLitera = text.charAt(3);

if (text.length === 8) {
    if (contineLiteraF) {
        if (primaLitera >= 0 || aDouaLitera >= a) {
            console.log(`Textul ${text} are lungimea 8, contine caracterul F si prima litera a textului este o cifra sau a doua litera este o litera`)
        }
    }
}
else console.log (`Textul ${text} nu respecta regulile`)