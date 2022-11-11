//returneaza void - fiindca nu specifica ca un ceva va iesi din functie
function squareNumber(nr) {
    const square = nr * nr;
    console.log(square);
}

function squareNumberWithReturn(nr) {
    const square = nr * nr;
    return square;
}

const square = (nr) => nr * nr;

//EXEMPLU 1
// const rezultatVoid = squareNumber(25);
// const rezultatReturnNumber = squareNumberWithReturn(10);
// console.log(rezultatVoid);
// console.log(rezultatReturnNumber);

const a = (text) => text + "a";

const b = (text) => text + "bb";

const c = (text) => text + "ccc";

const t = "abcd";

const rezulat = b(a(c(t)));
console.log(rezulat);



