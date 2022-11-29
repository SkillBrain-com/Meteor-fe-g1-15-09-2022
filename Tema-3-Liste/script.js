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

console.log("Exercitiul-4");
let TransManuala=0,TransAutomata=0;
const Transmisie = ['Automata','Manuala','Automata','Automata','Automata','Manuala','Manuala','Manuala','Automata','Manuala','Automata','Automata','Manuala','Automata'];
for(i=0; i < Transmisie.length; i++){
    if(Transmisie[i]==='Automata')
    TransAutomata++;
    if(Transmisie[i]==='Manuala')
    TransManuala++;
}
console.log(`Avem ${TransAutomata} automobile cu transmisie automata si ${TransManuala} cu transmisie manuala`);
console.log('Cele cu transmisie automata sunt:');
for(i=0; i < Transmisie.length; i++){
    if(Transmisie[i]==='Automata')
    console.log(`${Marca[i]} ${Model[i]};`) 
}
console.log('Cele cu transmisie manuale sunt:');
for(i=0; i < Transmisie.length; i++){
    if(Transmisie[i]==='Manuala')
    console.log(`${Marca[i]} ${Model[i]};`) 
}
console.log("Exercitiul-5");
let profit=0;
const PretVanzare = [18000,12000,18000,27300,12000,14000,12000,9000,37000,19900,43000,27400,21500,13590]
for(i=0;i<PretVanzare.length;i++){
    profit=PretVanzare[i]-PretCumparare[i];
    console.log(`Profitul pentru ${Marca[i]} ${Model[i]} a fost de ${profit}.`); 
}

console.log("Exercitiul-6");
let MedieProfit=0;
for(i=0; i<PretVanzare.length; i++){
    MedieProfit=MedieProfit+PretVanzare[i]-PretCumparare[i];
}
MedieProfit=MedieProfit/PretVanzare.length;
console.log(`Profitul mediu este de ${MedieProfit.toFixed(2)}.`);
for(i=0; i<PretVanzare.length; i++){
    profit=PretVanzare[i]-PretCumparare[i];
    if(profit > MedieProfit)
    console.log(`Automobilul ${Marca[i]} ${Model[i]} are profitul peste medie.`);
  }
  
