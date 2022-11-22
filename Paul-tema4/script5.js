let maxDiscount = 0; 
let discountPriceMax = 0; 
let maxDiscountArticle = 0; 


for  (let i = 0; i < BAZA_DE_DATE.length; i ++) {
  const control = BAZA_DE_DATE[i];
  const name = control.nume;
  const discount = control.procentReducere;
  const price = control.pret;

  if (maxDiscount === undefined || maxDiscount < discount) {
     maxDiscount = discount;
     discountPriceMax = price - price * discount / 100;
     maxDiscountArticle = name;
    
  }
}
console.log (`Articolul ${maxDiscountArticle}, are reducerea cea mai mare, in procent de ${maxDiscount} si are pretul de doar ${discountPriceMax} lei`)