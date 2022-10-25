console.log("Tema2 - EXERCITIUL 3");

const text = "Adda8"

lungimeText = text.length;
primaLitera = text.charAt(0);
ultimaLitera = text.charAt(text.length - 1);

if (
	primaLitera >= "a" && primaLitera <= "z" ||     //textul inceape cu o litera mica 
	ultimaLitera >= "0" && ultimaLitera <= "9" &&  // SAU textul inceape cu o litera mica SAU se termina cu o cifra
	lungimeText >= 3 && lungimeText <= 5          //textul este mai lung de 3 caractere si mai scurt de 5 caractere
    )
	{
	console.log (`Textul "${text}" incepe cu o litera mica sau se termina cu o cifra si are intre 3 si 5 caractere`);
	}

	else {
    console.log (`Textul "${text}" nu respecta regulile`);
	}
