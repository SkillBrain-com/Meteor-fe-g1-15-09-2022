const PretCumparare = [16000, 9000, 17000, 20300, 6000, 8000, 10000, 6000, 35500, 18900, 41000, 22500, 20500, 11590];

let SumaPretCumparare = 0;
let AvgSumaPretCumparare = 0;

for (let i=0; i < PretCumparare.length; i++) {
    SumaPretCumparare = SumaPretCumparare + PretCumparare[i];
}

AvgSumaPretCumparare = SumaPretCumparare / PretCumparare.length;
//console.log(SumaPretCumparare);
console.log(` Pretul mediu de cumparare al unei masini este: ${AvgSumaPretCumparare}`);