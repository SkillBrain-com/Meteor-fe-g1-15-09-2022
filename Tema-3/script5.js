console.log ( "Exercitiul 5");

const pretVanzare= [18000, 12000,  18000, 27300, 12000, 14000, 12000, 9000, 37000, 19900, 43000, 27400, 21500, 13590];
 let profit= 0;


for ( let i=0; i< pretVanzare.length; i++) {
    profit= pretVanzare[i] - pretCumparareList[i];
    console.log(`${marcaList[i]} ${modelList[i]} are profit de ${profit}`);
}