const ascundedetalii1 = document.querySelector("#ascunde-detalii1");
const ascundedetalii2 = document.querySelector("#ascunde-detalii2");
const ascundedetalii3 = document.querySelector("#ascunde-detalii3");
const ascundedetalii4 = document.querySelector("#ascunde-detalii4");
const ascundedetalii5 = document.querySelector("#ascunde-detalii5");
const ascundedetalii6 = document.querySelector("#ascunde-detalii6");

const ascundeparagraf1 = document.querySelector("#ascunde-paragraf1");
const ascundeparagraf2 = document.querySelector("#ascunde-paragraf2");
const ascundeparagraf3 = document.querySelector("#ascunde-paragraf3");
const ascundeparagraf4 = document.querySelector("#ascunde-paragraf4");
const ascundeparagraf5 = document.querySelector("#ascunde-paragraf5");
const ascundeparagraf6 = document.querySelector("#ascunde-paragraf6");

const veziTot = document.querySelector("#vezitot2");

ascundedetalii1.addEventListener("click", function(){
    clickDetalii(ascundedetalii1, ascundeparagraf1);
});
ascundedetalii2.addEventListener("click", function(){
    clickDetalii(ascundedetalii2, ascundeparagraf2);
});

ascundedetalii3.addEventListener("click", function(){
    clickDetalii(ascundedetalii3, ascundeparagraf3);
});

ascundedetalii4.addEventListener("click", function(){
    clickDetalii(ascundedetalii4, ascundeparagraf4);
});

ascundedetalii5.addEventListener("click", function(){
    clickDetalii(ascundedetalii5, ascundeparagraf5);
});

ascundedetalii6.addEventListener("click", function(){
    clickDetalii(ascundedetalii6, ascundeparagraf6);
});

veziTot.addEventListener("click", function(){
    if (veziTot.innerText !== "Vezi tot") {
        veziTot.innerText = "Vezi tot";
        ascundeparagraf1.style.display = "none";
        ascundeparagraf2.style.display = "none";
        ascundeparagraf3.style.display = "none";
        ascundeparagraf4.style.display = "none";
        ascundeparagraf5.style.display = "none";
        ascundeparagraf6.style.display = "none";

        ascundedetalii1.innerText = "Vezi detalii";
        ascundedetalii2.innerText = "Vezi detalii";
        ascundedetalii3.innerText = "Vezi detalii";
        ascundedetalii4.innerText = "Vezi detalii";
        ascundedetalii5.innerText = "Vezi detalii";
        ascundedetalii6.innerText = "Vezi detalii";

    } else {
        veziTot.innerText = "Ascunde tot";
        ascundeparagraf1.style.display = "block";
        ascundeparagraf2.style.display = "block";
        ascundeparagraf3.style.display = "block";
        ascundeparagraf4.style.display = "block";
        ascundeparagraf5.style.display = "block";
        ascundeparagraf6.style.display = "block";

        ascundedetalii1.innerText = "Ascunde detalii";
        ascundedetalii2.innerText = "Ascunde detalii";
        ascundedetalii3.innerText = "Ascunde detalii";
        ascundedetalii4.innerText = "Ascunde detalii";
        ascundedetalii5.innerText = "Ascunde detalii";
        ascundedetalii6.innerText = "Ascunde detalii";
    }
});

function clickDetalii(element, element2) {
    if (element.innerText !== "Vezi detalii") {
        element.innerText = "Vezi detalii";
        element2.style.display = "none";
    } else {
        element.innerText = "Ascunde detalii";
        element2.style.display = "block";
    }
}

 
   
