let nume = "Pizza Americana";
let termenCautare = "zz";

let rezultat;

if (nume.includes(termenCautare) === true) {
    rezultat = nume;
}
else {
    rezultat = "Nu s-au gasit rezultate"
}

console.log(rezultat);