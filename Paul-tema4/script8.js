const brandHistogram ={};

for (let i = 0; i < BAZA_DE_DATE.length; i ++) {
  const control = BAZA_DE_DATE[i];
  const marca = control.brand;
  const discount = control.reducerePret;
  const price = control.pret;
  const discountPrice = price - price * discount / 100;

  if (brandHistogram[marca] === undefined) {
    brandHistogram[marca] = {
      media: discountPrice,
      nrOfBrands : 1
    }
  }
  else {
    brandHistogram[marca].media += discountPrice;
    brandHistogram[marca].nrOfBrands ++;
  }
}
    const allBrands = Object.keys(brandHistogram);
    for (let i = 0; i < allBrands.length; i ++) {
      const specifficBrand = allBrands[i];
      const {media, nrOfBrands} = brandHistogram[specifficBrand];
      const brandAvg = media / nrOfBrands;
      console.log(`Media preturilor articolelor pt marca ${specifficBrand} este ${brandAvg}`);
    }
    
