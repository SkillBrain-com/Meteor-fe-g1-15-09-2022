const carteTelefoane = {
    cezarMocanu: "13241",
    "cezar mocanu": "0770000001",
    "vlad anghel": "0770000002",
    "miruna maria": "0770000003",
};

console.log(carteTelefoane);

const numarTelefonCautat = carteTelefoane["cezar mocanu"];
const numarTelefonCautat2 = carteTelefoane.cezarMocanu;
console.log(`Numarul de telefon a lui cezar mocanu este ${numarTelefonCautat} sau ${numarTelefonCautat2}`);

