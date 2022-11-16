 console.log(" Cerinta 5");


 let reducereMare=0;
 let articolReducereMare=0;
 for (let i=0; i< BAZA_DE_DATE.length; i++){
    const imbracaminte= BAZA_DE_DATE[i];
    const {nume, pret, procentReducere}=imbracaminte;
    const discount=(procentReducere*pret)/100;
    const pretRedus= pret-discount;
    

    if (reducereMare=== undefined){
      reducereMare=discount;

    }
    else  ( discount > reducereMare) 
      reducereMare=discount;
          articolReducereMare=i; 

    
    const disCount= ( BAZA_DE_DATE[articolReducereMare].procentReducere *BAZA_DE_DATE[articolReducereMare].pret)/100;
    const pretRedusFinal= BAZA_DE_DATE[articolReducereMare].pret - disCount;
    
        console.log(`${BAZA_DE_DATE[articolReducereMare].nume} are reducere de: ${Math.round(disCount)} cu pretul ${Math.round(pretRedusFinal)}`);
   }

