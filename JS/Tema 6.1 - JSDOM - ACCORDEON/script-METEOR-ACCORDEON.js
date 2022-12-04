/*
Urmareste designul de mai jos si creeaza o componenta accordeon.
Ai in vedere pattern-ul MVC, si structureaza-ti codul folosind cat mai multe functii pure.
MVC - model view controller
    View 
        → Interfata utilizatorului care 
        → afiseaza modelul
        → primeste input de la utilizator prin butoane, inuputuri

Model   
        → Datele care se modifica in aplicatie

Controller 
        → Modifica modelul

User → 

Declanseaza un controller printr-un element din interfata(event) →
Controllerul modifica modelul in functie de elementul declansator(in functie de buton) →
Modelul este afisat in UI (se schimba UI in functie de model printr-o functie de afisare)

Comportament
- apasarea pe butonul de vezi detalii afiseaza pentru fiecare card detaliile corespunzatoare acelui card
- cand se apasa pe butonul de ascunde detalii, se va ascunde continutul acelui card
- unele carduri vor fi predeschise in momentul in care un utilizator deschide pagina(la fel ca in design)
- in functie de cum este cardul(deschis/inchis) se va modifica textul de vezi detalii/ascunde detalii
*/

/////////////////////////////////////////* MODEL *//////////////////////////////////////////////////////

/* VIEW - SELECTORS */
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);
const accordionItemHeader = document.querySelector(".accordion-item-header");
const showOnLoad = document.querySelectorAll(".show-on-load");
const accordionItemBody = document.querySelector(".accordion-item-body");

/////////////////////////////////////* Functii utilitare *///////////////////////////////////////////////

///////////////////////////////////////** CONTROLLER *///////////////////////////////////////////////////

////////////////////////////////////** VIEW - RENDER*/////////////////////////////////////////////////////

///////////////////////////////////** VIEW - EVENT LISTENERS *////////////////////////////////////////////

const headers = accordionItemHeaders;
headers.forEach((header) => {
  header.addEventListener("click", () => {
    const body = header.nextElementSibling;
    const heightBody = body.scrollHeight;
    header.classList.toggle("active");
    if (header.classList.contains("active")) {
      body.style.maxHeight = `${heightBody}px`;
    } else {
      body.style.maxHeight = 0;
    }
  });
});

headers.forEach((header) => {
  window.addEventListener("load", () => {
    const body = header.nextElementSibling;
    const heightBody = body.scrollHeight;
    header.classList.contains("show-on-load");
    if (header.classList.contains("show-on-load")) {
      header.classList.toggle("active");
      body.style.maxHeight = `${heightBody}px`;
    } else {
      body.style.maxHeight = 0;
    }
  });
});
