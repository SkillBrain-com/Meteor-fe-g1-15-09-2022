console.log("Exercitiul 3");

const cumpararePretList=[16000, 9000, 20300, 6000, 8000, 10000, 6000, 35500, 18900, 41000, 22500, 20500, 11590];
let cumpararePretMax= cumpararePretList[0];
let  cumpararePretMin= cumpararePretList[0];
for (i=0; i < cumpararePretList.length; i++) {
  if (cumpararePretList[i]> cumpararePretMax) {
    cumpararePretMax=cumpararePretList[i];
  
  }
  if (cumpararePretList[i]< cumpararePretMin) {
    cumpararePretMin=cumpararePretList[i];
  }
}
 console.log( cumpararePretMax);
 console.log(cumpararePretMin);