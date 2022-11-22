console.log("Cerinta 1")

function myMessage() {
    const nume = "Bianca";
    message=`Bine ai venit, ${nume}!`;

    
  console.log(message);

}
myMessage()



console.log("Cerinta 2");

const nameList=[ "Bianca", "Andreea", "Daniel", "Mihai", "Larisa", "Razvan"];

function nameAndInitial(nameList, letter) {
    const returnName=[];
    for( let i=0; i< nameList.length; i++){
        let firstLetter=nameList[i].charAt(0)
       if (firstLetter===letter) {
        returnName.push(nameList[i]);
        result=returnName ;}
        
        if (firstLetter !== letter){
            returnName !==null;
            result=returnName;
       }
       
       else {
        result=null; 
       }
       }
   console.log(result);
    }
    nameAndInitial(nameList, "B");
    nameAndInitial(nameList, "D");
    nameAndInitial(nameList, "C");


    console.log("Cerinta 3a");

  const PRODUSE = [
    {
        nume: "Apa",
        pret: 7,
        cantitate: 1,
    },
    {
        nume: "Mure",
        pret: 11,
        cantitate: 12,
    },
    {
        nume: "Ciocolata",
        pret: 20,
        cantitate: 0,
    },
    {
        nume: "Gem",
        pret: 15,
        cantitate: 50,
    },
    {
        nume: "Prune",
        pret: 12,
        cantitate: 0,
    },
    {
        nume: "Banane",
        pret: 11,
        cantitate: 13,
    },
]
     function selecteazaDupaCantitate(listaProduse, limita){
        const returnProduct=[];
        for (let i=0; i < listaProduse.length; i++) {
              const produs=listaProduse[i];
              const {cantitate}=produs;
              if (cantitate > limita) {
                returnProduct.push(produs);
              }
        }
        return (returnProduct);
     }
    console.log(selecteazaDupaCantitate(PRODUSE, 12));
    console.log(selecteazaDupaCantitate(PRODUSE, 51))


            console.log("Cerinta 3b");


      function selecteazaPreturile(listaProduse){
        returnNewList=[];
        for (let i=0; i<listaProduse.length;i++){
            const produs= listaProduse[i];
            const {cantitate, pret}=produs;
            const value= pret * cantitate;
            returnNewList.push(value);
        }
       return (returnNewList);

      }
       console.log(selecteazaPreturile(PRODUSE));


       console.log( "Cerinta 3c");

       function calculeazaValoareaMedie(listaProduse){
        let sum=0;
        let count=0;

        for (let i=0; i< listaProduse.length; i++){

            const produs= listaProduse[i];
            const {pret, cantitate}= produs;
            if (cantitate > 0){
                const value= pret*cantitate;
                sum+=value;
                count++;

                 

            }
        }
             return sum/count;
       }

       const valoareaMedie= calculeazaValoareaMedie(PRODUSE);
       console.log(valoareaMedie);
      

    





    





