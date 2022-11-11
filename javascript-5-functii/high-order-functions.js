const f1 = function(){
    console.log("Eu sunt afisat din f1");
};
const f2 = function(){
    console.log("Eu sunt afisat din f2");
};

const f3 = function(functia1, functia2){
    functia1();
    functia2();
    console.log("Eu sunt afisat din f3");
};

//high order functions - o functie care este pasata ca un argument
// f3(f1, f1);


