console.log("exercitiul-2-avansati")
console.log("Tema mutata in branch_ul Ale-Barboni-Teme-extra")

let allNumbers = [1, 3, 5, 7, 9, 3, 5, 7, 9, 5, 7, 9, 7, 9, 9];

const countOccurrences = function(arr, val) {
  return arr.reduce((acc, elem) => {
    return (val === elem ? acc + 1 : acc)
  }, 0);
}

console.log(`1 -`, countOccurrences(allNumbers, 1), `aparitii`);
console.log(`3 -`, countOccurrences(allNumbers, 3), `aparitii`);
console.log(`5 -`, countOccurrences(allNumbers, 5), `aparitii`);
console.log(`7 -`, countOccurrences(allNumbers, 7), `aparitii`);
console.log(`9 -`, countOccurrences(allNumbers, 9), `aparitii`);
