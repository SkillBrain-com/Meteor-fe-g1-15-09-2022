/* View - Selectors */
const textDisplay = document.getElementsByClassName("text-container");
const buttonExtend = document.getElementsByClassName("hideShowButton");
/* Model */
/* View */
/* View - Event listeners */
for (let i = 0; i < buttonExtend.length; i++) {
buttonExtend[i].addEventListener("click",function(){
if(buttonExtend[i].innerHTML==="Ascunde detalii"){
    textDisplay[i].style.display = "none";
    buttonExtend[i].innerHTML="Vezi detalii";
} else{
    textDisplay[i].style.display = "flex";
    buttonExtend[i].innerHTML="Ascunde detalii";
}
}
)
}
/* Controller */
for (let i = 0; i < buttonExtend.length; i++) {
    if(buttonExtend[i].innerHTML==="Vezi detalii"){
        textDisplay[i].style.display = "none";
    }
}