const text = "@ana uq";
const lungimeText = text.length;
const primaLitera = text.charAt(0);
const aDouaLitera = text.charAt(1);
const contineLitera = text.includes("@");

console.log(lungimeText);
console.log(primaLitera);
console.log(aDouaLitera);
console.log(contineLitera);

if (lungimeText === 8 && contineLitera === true) {
    if (primaLitera >= "0" && primaLitera <= "9") {
        write = "se respecta regulile";
    }
    else {
        if (aDouaLitera >= "a" && aDouaLitera <= "z") {
            write = "se respecta regulile";
        }
        else { write = "NU se respecta regulile" }
    }
}
else {
    write = "cuvantul NU respecta regulile";
}

console.log(write);