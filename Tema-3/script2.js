console.log("Exercitiul 2");

const pretCumparareList= [16000, 9000, 20300, 6000, 8000, 10000, 6000, 35500, 18900, 41000, 22500, 20500, 11590];

let pretSum= 0;

for ( let i= 0; i < pretCumparareList.length; i++) {
    pretSum+= pretCumparareList[i];

}
const avgPret= pretSum / pretCumparareList.length;
console.log (`Pretul mediu din ${pretCumparareList.length}  este ${avgPret} `);