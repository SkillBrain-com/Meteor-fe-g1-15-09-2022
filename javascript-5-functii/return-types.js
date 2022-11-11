//returneaza void - fiindca nu specifica ca un ceva va iesi din functie
function squareNumber(nr) {
    const square = nr * nr;
    console.log(square);
}

function squareNumberWithReturn(nr) {
    const square = nr * nr;
    return square;
}

//EXEMPLU 1
// const rezultatVoid = squareNumber(25);
// const rezultatReturnNumber = squareNumberWithReturn(10);
// console.log(rezultatVoid);
// console.log(rezultatReturnNumber);


const a = (text) => {
    return text + "a";
}

const b = (text) => {
    return text + "bb";
}

const c = (text) => {
    return text + "ccc";
}

const t = "abcd";
//abcdccc
//abcdcccbb
//
const rezulat = a(b(c(t)));
console.log(rezulat);



