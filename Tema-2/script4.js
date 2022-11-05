console.log("Tema2 - EXERCITIUL 4");

const alDoileaText = "mari@anaa";


lungimeText = alDoileaText.length;
contineCaracterAt = alDoileaText.includes("@");
primaLitera = alDoileaText.charAt(0);
aDouaLitera = alDoileaText.charAt(1);


if (
    lungimeText > 7 && lungimeText < 8 &&//textul are lungimea 8 SI
    contineCaracterAt &&     // textul contine caracterul @ SI
	primaLitera >= "0" && primaLitera <= "9" || // prima litera a textului este o cifra SAU
	aDouaLitera >= "a" && aDouaLitera <= "z" //a doua litera a textului este o litera
    ) 
    {
	console.log (`Textul "${alDoileaText}" are lungimea 8 si contine caracterul @ si prima litera este o cifra
    sau a doua litera este o litera.`);
    }
    
    else {
    console.log (`Textul "${alDoileaText}" nu respecta regulile.`);
    }


