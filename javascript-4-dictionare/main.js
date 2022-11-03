/* MASINA
    {
        marca: string;
        transmisie: string;
        combustibil: string;
        pretCumparare: number;
        pretVanzare: number;
        capacitateCilindrica: number;
    }
*/

const histogram = {};

for (let i = 0; i < bazaDeDate.length; i++) {
    const masina = bazaDeDate[i];

    //Acesarea valorilor prin chei si salvearea lor in varibile
    // const marca = masina.marca;
    // const transmisie = masina.transmisie;

    //Destructurare(selectia) valorilor dintr-un obiect direct in variabile
    const {marca, transmisie} = masina;

    const cheie = `${marca}-${transmisie}`;

    if (histogram[cheie] === undefined) {
        histogram[cheie] = 1;
    }
    else {
        histogram[cheie]++;
    }
}

console.log(histogram);