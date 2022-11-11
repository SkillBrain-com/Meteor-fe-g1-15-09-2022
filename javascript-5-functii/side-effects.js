let sideEffectVariabiable = 10;

//Functie cu efecte secundare
//modifica si alte varibile care nu sunt in interiorul functiei
function sayMyName(name) {
    sideEffectVariabiable += 10;
    console.log(name);
}

//Functie pura(fara efecte secundare)
//face doar ceea ce zice ca face, adica
//nu modifica nimica din exteriorul functiei
function sayMyNamePure(name) {
    console.log(name);
}

//Functie cu efecte secundare
// sayMyName("Cezar"); // 20
// sayMyName("Mihai"); // 30
// sayMyName("Adina"); // 40

//Functie pura(fara efecte secundare)
// sayMyNamePure("Cezar");
// sayMyNamePure("Mihai");
// sayMyNamePure("Adina");

// console.log(sideEffectVariabiable);