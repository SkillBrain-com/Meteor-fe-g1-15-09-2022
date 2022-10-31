
 let numar = 123;
 if(numar >= 0 && numar < 100) {
    console.log(`${numar} are mai putin de 3 cifre`);
 }
 else if(numar >= 100 && numar < 100000 && numar % 2 === 0) {
   console.log(`${numar} este par si are intre 3 si 5 cifre`);
   }
   else if(numar >= 100 && n < 100000 && numar % 2 === 1) {
      console.log(`${numar} este impar si are intre 3 si 5 cifre`);
      }
      else if (numar >= 100000 ) {
         console.log(`${numar} are mai mult de 5 cifre`);
         }
         else {
        console.log(`numarul ${numar} nu se incadreaza in nici un criteriu`);
        }
