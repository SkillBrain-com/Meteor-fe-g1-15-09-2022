const text = "12345F78";
const contineLiteraF = text.includes("F");
const lungimeText = text.length;
const primaLitera = text.charAt(0);
const adouaLitera = text.charAt(1);

if (lungimeText === 8) {
    if (contineLiteraF) {
        if ((primaLitera >= "0" && primaLitera <= "9") ||
            (adouaLitera >= "a" && adouaLitera <= "z")) {
                console.log(`textul ${text} are lungimea 8, contine caracterul "F", prima litera este o cifra sau a doua litera este o litera`);
            }
    }
}