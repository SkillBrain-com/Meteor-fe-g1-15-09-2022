const histogram = {};
for(let i = 0; i <= 19; i++){
const articol = BAZA_DE_DATE[i];
const numeArticol = articol.nume;
if(histogram[numeArticol]===undefined){
    histogram[numeArticol]=1;
}
else{
    histogram[numeArticol]++;
}

}
console.log(histogram)