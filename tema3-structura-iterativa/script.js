// start IIFE
(function () {
    console.log(`exercitiul3-1`);
    const marca = ["BMW", "Audi", "Dacia", "Audi", "Audi", "Dacia", "Dacia", "Dacia", "BMW", "Volkswagen", "Opel", "Mercedes", "BMW", "Volkswagen"];
    const model = ["Seria 1", "A3", "Spring", "Q5", "A4", "Spring", "Docker", "Logan", "X5", "Golf", "Astra", "E200", "220i", "Golf"];

    for (let i = 0; i < marca.length; i++) {
        console.log (`${marca[i]} ${model[i]}`);
    }

    // end IIFE
})()