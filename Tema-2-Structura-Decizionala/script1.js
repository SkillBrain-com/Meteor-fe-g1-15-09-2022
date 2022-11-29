const number = 123;
if (number <= 99) {
  console.log ("Numarul ${number} are mai putin de 3 cifre")
}
else if ( number >= 100 && number <= 100000) {
  if ( number % 2 === 0) {
    console.log ("Numarul ${number} este par si are intre 3 si 5 cifre")
  }
  else {
    console.log ("Numarul ${number} este impar si are intre 3 si 5 cifre")
  }
}
  
else if ( number >= 1000000) {
  console.log ("Numarul ${number} are mai mult de 5 cifre")
}