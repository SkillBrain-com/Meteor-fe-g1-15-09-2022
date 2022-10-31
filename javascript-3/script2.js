const pretCumparare = [16000, 9000, 17000, 20300, 6000, 8000, 10000, 6000, 35500, 18900, 41000, 22500, 20500, 11590];
let suma = 0;

for (let i = 0; i < pretCumparare.length; i++) {
    suma += pretCumparare[i];
}

const mediaPretCumparare = suma / pretCumparare.length;
console.log(`Pretul mediu de cumparare este: ${Math.round(mediaPretCumparare)}, mai exact ${mediaPretCumparare}`)

