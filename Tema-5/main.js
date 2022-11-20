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
    





