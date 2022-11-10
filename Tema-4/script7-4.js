 console.log (" Cerinta 7");

let count2=0;

for (let i=0; i< BAZA_DE_DATE.length; i++){
    const imbracaminte=BAZA_DE_DATE[i];
    const {dimensiuni}=imbracaminte;


    if ( dimensiuni.includes("L") && dimensiuni.includes("XL")) {
        count2++;
    }
} 
            
                   console.log(`${count2} articolele sunt disponibile in marimea L si XL`);

