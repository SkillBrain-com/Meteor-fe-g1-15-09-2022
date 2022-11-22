let name = 0;
let discount = 0;
let price = 0;

for (let i =0; i < BAZA_DE_DATE.length; i ++) {
  const control = BAZA_DE_DATE[i];
  const name = control.nume;
  const discount = control.procentReducere;
  const price = control.pret;
  const discountPrice = price - discount * price / 100;
  
  
  if (discount > 15) {
    
   console.log (`Acest articol ${name} beneficiaza de un discount de ${discount} %, ajungand la pretul de doar ${discountPrice} lei`);
   
  }
}
