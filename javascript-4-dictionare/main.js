/* MASINA
    {
        marca: string;
        transmisie: string;
        combustibil: string;
        pretCumparare: number;
        pretVanzare: number;
        capacitateCilindrica: number;
        dealer: {
            nume: string;
            oras: string;
        }
    }
*/

const histogram = {};

for (let i = 0; i < bazaDeDate.length; i++) {
    const masina = bazaDeDate[i];

    //Destructurare(selectia) valorilor dintr-un obiect direct in variabile
    const {marca, dealer} = masina;
    const {oras} = dealer;

    const cheie = `${marca}-${oras}`;

    if (histogram[cheie] === undefined) {
        histogram[cheie] = 1;
    }
    else {
        histogram[cheie]++;
    }
}

console.log(histogram);
const keys = Object.keys(histogram); // o lista doar cu cheile din dictionarul nostru
const values = Object.values(histogram); // o lista doar cu valorile din dictionarul nostru
console.log(keys);
console.log(values);