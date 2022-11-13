for (let i=0; i<BAZA_DE_DATE.length; i++) {
    const imbracaminte = BAZA_DE_DATE[i];
    const {nume, pret, procentReducere} = imbracaminte;
    const pretReducere = (procentReducere * pret)/100;
    const pretRedus = pret - pretReducere;

    if (procentReducere > 15) {
      console.log(`${nume} are procentul de reducere: ${procentReducere} si pretul redus: ${pretRedus}`)
    }
}