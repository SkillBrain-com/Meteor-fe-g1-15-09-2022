console.log("Tema2 - EXERCITIUL 2");

let a = 123;
rest = a % 2;


if (a < 99) {           
        console.log(`Numarul ${a} are mai putin de 3 cifre`);
    }

if (rest === 0 && a < 99999 && a > 99) {
   console.log(`Numarul ${a} este par si are intre 3 si 5 cifre`);             
   }
    
if (rest !== 0 && a < 99999 && a > 99) {
   console.log(`Numarul ${a} este impar si are intre 3 si 5 cifre`);             
   }
   
if (a > 100000) {             
   console.log(`Numarul ${a} are mai mult de 5 cifre`);
   }

