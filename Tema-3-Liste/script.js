console.log("Exercitiul-1");
const Marca = ['BMW','Audi','Dacia','Audi','Audi','Dacia','Dacia','Dacia','BMW','Volkswagen','Opel','Merceds','BMW','Volkswagen'];
const Model = ['Seria 1','A3','Spring','Q5','A4','Spring','Docker','Logan','X5','Golf','Astra','E 200','220i','Golf'];
let i=0;
for(i=0; i < Marca.length; i++){
    console.log(`${Marca[i]} ${Model[i]}\n`);
}

console.log("Exercitiul-2");

const PretCumparare = [16000,9000,17000,20300,6000,8000,10000,6000,35500,18900,41000,22500,20500,11590];
let MediePret=0;
for(i=0; i < PretCumparare.length; i++){
   MediePret=MediePret+PretCumparare[i]; 
}
MediePret=MediePret/PretCumparare.length;
console.log(`Media preturilor de cumparare este ${MediePret.toFixed(2)}`);

console.log("Exercitiul-3");
let PretMax=PretCumparare[0], PretMin=PretCumparare[0]; 
for(i=1; i < PretCumparare.length; i++){              
    if(PretMax <= PretCumparare[i])
    PretMax = PretCumparare[i];
    if(PretMin >= PretCumparare[i])
    PretMin = PretCumparare[i];
}
console.log(`Pretul minim este ${PretMin}, iar pretul maxim este ${PretMax}`);
