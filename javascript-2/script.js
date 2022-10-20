let nume = "Pizza Americana";
let pret = 25.99;
let esteDisponibilaInMaiMulteMarimi = false;

let numeProdusCautat = "Pizza Hawai";
let pretMinimProdusCautat = 10;
let pretMaximProdusCautat = 30;
let doresteDisponibilInMarimi = true;

if (
    nume === numeProdusCautat &&
    pret >= pretMinimProdusCautat &&
    pret <= pretMaximProdusCautat &&
    esteDisponibilaInMaiMulteMarimi === doresteDisponibilInMarimi
) {
    console.log("Am gasit produsul");
}
else {
    console.log("Nu s-au gasit rezultate");
}