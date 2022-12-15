// putem folosi await pe un promise DOAR in functii async
async function main() {
    const promisiuneMasinaDeSpalat = new Promise(function(resolve, reject) {
        console.log("Acuma a pornit masina de spalat");

        setTimeout(function(){
            const rufeleSauSpalatCuSucces = Math.random() < 0.5;

            if (rufeleSauSpalatCuSucces === true) {
                resolve("Rufele au fost spalate");
            }
            else {
                reject("Masina de spalat s-a blocat");
            }
        }, 2000);
    });

    try {
        console.log(await promisiuneMasinaDeSpalat);
    }
    catch(error) {
        console.log(`Spalarea a esuat din cauza: ${error}`);
    }
    
    console.log("Programul s-a sfarsit");
}

main();