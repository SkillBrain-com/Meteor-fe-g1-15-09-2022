let nrArticoleLXL = 0;
for(let i = 0; i < BAZA_DE_DATE.length; i++){
const articol = BAZA_DE_DATE[i];
const dimensiuniArticol = articol.dimensiuni;
const {dimensiuni,culori} = articol;
if(dimensiuniArticol.length=2 && (dimensiuniArticol.includes('L') && dimensiuniArticol.includes('XL'))){
    nrArticoleLXL++;
}
}
console.log(`Avem ${nrArticoleLXL} de articole cu marimea L si XL`)
