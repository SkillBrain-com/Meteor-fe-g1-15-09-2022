const histogram2 = {};
for(let i = 0; i < BAZA_DE_DATE.length; i++){
const articol = BAZA_DE_DATE[i];
const numeBrand = articol.brand;
if(histogram2[numeBrand]===undefined){
    histogram2[numeBrand]=1;
}
else{
    histogram2[numeBrand]++;
}

}
console.log(histogram2);
