let nrArticoleCautate=0;
for(let i = 0; i < BAZA_DE_DATE.length; i++){
const articol = BAZA_DE_DATE[i];
const dimensiuniArticol = articol.dimensiuni;
const culoriArticol = articol.culori;
if(dimensiuniArticol.length<=3 && (culoriArticol.includes('ROSU') || culoriArticol.includes('VERDE'))){
    nrArticoleCautate++;
}
}
console.log(`Avem ${nrArticoleCautate} de articole cu cel mult 3 dimensiuni si disponibile in ROSU sau VERDE`);
