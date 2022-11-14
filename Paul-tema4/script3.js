let count = 0;

for (let i = 0; i < BAZA_DE_DATE; i ++) {
  const articole = BAZA_DE_DATE[i];
  const listaDimensiuni = articole.dimensiuni;
  const colors = articole.culori;
  
  if ((listaDimensiuni.length <= 3) && (colors.includes("ROSU")) || (colors.includes("VERDE"))) {
      count++;
  }
 
}
 console.log (`Avem ${count} articole care indeplinesc criteriile`);