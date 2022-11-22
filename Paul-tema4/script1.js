let first20Articles = 0;

for ( let i = 0; i < BAZA_DE_DATE.length; i ++) {
    const first20Articles =BAZA_DE_DATE[i].nume;
    if (i < 20) {
        console.log (first20Articles);
    }
}