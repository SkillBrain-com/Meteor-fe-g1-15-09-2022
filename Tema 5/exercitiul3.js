//  a)

function selecteazaDupaCantitate(listaProduse,limita){
    let j = 0;
    const articole = []
for(let i = 0; i < listaProduse.length; i++){
    const articol = listaProduse[i];
    const cantitateProdus = articol.cantitate; 
    if(cantitateProdus > limita){
        articole[j]=articol;
        j++;
    }
}
if(j===0){
    return 0;
}
return articole;
}
console.log(selecteazaDupaCantitate(PRODUSE,12));
console.log(selecteazaDupaCantitate(PRODUSE,100));

// b)
function selecteazaPreturile(listaProduse){
    const listaPreturi = []
    for(let i = 0; i < listaProduse.length; i++){
        const articol = listaProduse[i];
        const cantitateArticol = articol.cantitate; 
        const pretArticol = articol.pret;
        listaPreturi[i]=pretArticol*cantitateArticol;
    }
   return listaPreturi;
}
console.log(selecteazaPreturile(PRODUSE));
console.log(selecteazaPreturile([]));

// c)

function calculeazaValoareMedie(listaProduse){
    if(selecteazaDupaCantitate(listaProduse,0)=== 0){
        return 0;
    }
    const listaPreturi = selecteazaPreturile(listaProduse);
    let valoareMedie = 0 
    let j=0;
   for(i=0;i<listaPreturi.length;i++){  
     if(listaPreturi[i] !==0){
         j++;
         valoareMedie+= listaPreturi[i]
       }
    }
   valoareMedie/=j;
   return valoareMedie;
}

console.log(calculeazaValoareMedie(PRODUSE));
console.log(calculeazaValoareMedie([]));