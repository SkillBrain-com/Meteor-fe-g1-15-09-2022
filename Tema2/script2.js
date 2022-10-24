console.log ("Exercitiul 2")

number = 150000;

if (number <= 99) {
  console.log (`${number} are mai putin de trei cifre`);
} 
else if (number >= 100 && number < 100000) {
  if (number % 2 === 0){
    console.log (`${number} este par si are intre 3 si 5 cifre `);
  }
  else {
    console.log (`${number} este impar si are intre 3 si 5 cifre`);
  }
}
else if (number > 100000) {
  console.log (`${number} are mai mult de 5 cifre`);
}
