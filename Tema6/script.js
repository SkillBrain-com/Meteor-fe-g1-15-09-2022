const sumaInitiala=200.43
const inputSuma = document.querySelector("#inputBox");
const errorText = document.querySelector("#errorMsg");
const buttonExtract = document.querySelector("#blueButton");
const curentSum = document.querySelector("#curentSum");
const buttonSum = document.querySelector("#buttonSum")
curentSum.innerHTML=sumaInitiala;
const dif = (a,b) => a-b;
function transFloat(input) {
    const number = input;
    const numberSafe = number.replaceAll(",",".");
    const numberModified=Number(numberSafe);
    const numberNaN = isNaN(numberModified)
    if(numberNaN===true){
        return 0;
    }
    return (numberModified);
}
inputSuma.addEventListener("keyup",function(){
    const sold=transFloat(curentSum.innerHTML);
    const extras=transFloat(inputSuma.value);
    if(extras > sold || extras<5){
        buttonSum.innerHTML = "Valoare invalida";
        buttonExtract.style.backgroundColor="#9a9a9a";
        buttonExtract.disabled = true;
    }
    else{
        buttonSum.innerHTML = `${extras} RON`;
        buttonExtract.style.backgroundColor="#2196f3";
        buttonExtract.disabled = false;

    }
    console.log(inputSuma.value)
    if(inputSuma.value===""){
        buttonSum.innerHTML = "";
        buttonExtract.style.backgroundColor="#2196f3";
        buttonExtract.disabled = false;
    }
}
)
buttonExtract.addEventListener("click", function(){
const sold=transFloat(curentSum.innerHTML);
const extras=transFloat(inputSuma.value);
if(extras < 5){
    errorText.innerHTML = "Valoare introdusa incorecta.";
return;}
const rezultat=dif(sold,extras);
console.log(rezultat);
if(rezultat < 0){
    errorText.innerHTML = "Suma introdusa nu poate depasi suma din cont.";
}
else{
    curentSum.innerHTML = rezultat.toFixed(2);
    errorText.innerHTML ="";  
}
}
);