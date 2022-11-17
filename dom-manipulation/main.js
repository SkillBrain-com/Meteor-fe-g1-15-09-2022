const targetHeading = document.querySelector("#targetHeading");

let clickCount = 0;

targetHeading.addEventListener("click", function() {
    clickCount++;
    targetHeading.innerText = `Metero Skillbrains ${clickCount}`;
});