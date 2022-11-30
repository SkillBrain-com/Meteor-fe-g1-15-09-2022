// start IIFE
(function () {

    console.log(`exercitiul3-3`);



    const marca = ["BMW", "Audi", "Dacia", "Audi", "Audi", "Dacia", "Dacia", "Dacia", "BMW", "Volkswagen", "Opel", "Mercedes", "BMW", "Volkswagen"];
    const model = ["Seria 1", "A3", "Spring", "Q5", "A4", "Spring", "Docker", "Logan", "X5", "Golf", "Astra", "E200", "220i", "Golf"];
    const pretCumparare = [16000, 9000, 17000, 20300, 6000, 8000, 10000, 6000, 35500, 18900, 41000, 22500, 20500, 11590];

    let celMaiMicPret = pretCumparare[0];
    let celMaiMarePret = pretCumparare[0];


    for (let i = 0; i < pretCumparare.length; i++) {
        if (pretCumparare[i] < celMaiMicPret) {
            celMaiMicPret = pretCumparare[i];
        }

        if (pretCumparare[i] > celMaiMarePret) {
            celMaiMarePret = pretCumparare[i];
        }
    }

    console.log(`Cel mai mic pret este: ${celMaiMicPret}`)
    console.log(`Cel mai mare pret este: ${celMaiMarePret}`)


    // end IIFE
})()