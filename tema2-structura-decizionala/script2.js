const number = 123;
if(number >= 0 && number < 100) {
   console.log(`${number} are mai putin de 3 cifre`);
   }
   else if(number >= 100 && number < 10000 && number % 2 === 0) {
      console.log(`${number} este par si are intre 3 si 5 cifre`);
      }
      else if(number >= 100 && number < 10000 && number % 2 === 1) {
         console.log(`${number} este impar si are intre 3 si 5 cifre`);
         }