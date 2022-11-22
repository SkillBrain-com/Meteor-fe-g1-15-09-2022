const number = 123;
if(number >= 0 && number < 100) {
   console.log(`${number} are mai putin de 3 cifre`);
   }
   else if(number >= 100 && number < 100000 && number % 2 === 0) {
      console.log(`${number} este par si are intre 3 si 5 cifre`);
      }
      else if(number >= 100 && number < 100000 && number % 2 === 1) {
         console.log(`${number} este impar si are intre 3 si 5 cifre`);
         }
         else if(number >= 100000 ) {
            console.log(`${number} are mai mult de 5 cifre`);
            }
            else {
           console.log(`numarul ${number} nu se incadreaza in nici un criteriu`);
           }