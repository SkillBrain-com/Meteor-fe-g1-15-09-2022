const text = "Ana are mere";
const lungimeText = text.length;
const primaLitera = text.charAt(0);
const ultimaLitera = text.charAt(text.length - 1);

console.log(lungimeText);
console.log(primaLitera);
console.log(ultimaLitera);

if (lungimeText >= 3 && lungimeText <= 5) {
if (primaLitera>= "a" && primaLitera <= "z") {
    write = "cuvantul este regex pentru ca incepe cu litera mica si are intre 3-5 caractere";
} 
else {
    if (ultimaLitera>="0" && ultimaLitera<="9") {
        write = "cuvantul este regex pentru ca se termina cu cifra si are intre 3-5 caractere";
    }
    else {
        write = "cuvantul NU este regex, chiar daca are intre 3 si 5 caractere ";
    }
}
}
else {
    write = "cuvantul NU este regex";
}

console.log(write);