let text = "EsteraF3";
let lungimeText = text.length;
let contineLiteraF = text.includes("F");
let primaLitera = text.charAt(0);
let aDouaLitera = text.charAt(1);

if (
    (text.length === 8) &&
    (contineLiteraF) &&
    (primaLitera >= 0 || aDouaLitera >= "a") 
    ) {
        console.log(`Textul ${text} are lungimea 8, contine caracterul F
         si prima litera a textului este o cifra sau a doua litera este o litera`)
        }

        else {
            console.log(`Textul ${text} nu respecta regulile`)
        }