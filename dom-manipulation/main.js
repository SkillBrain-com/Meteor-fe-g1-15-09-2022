const nameInput = document.querySelector("#nameInput");
const targetHeading = document.querySelector("#targetHeading");


nameInput.addEventListener("keyup", function(event){
    targetHeading.innerText = `Salut ${event.target.value}!`;
});