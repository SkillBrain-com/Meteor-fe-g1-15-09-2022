const numar = 151978;
let rest = numar % 2;

if (numar > 0) {
    if (numar < 100) {
        console.log(`${numar} are mai putin de 3 cifre`);
    } 
    else if (numar < 100000) {
        if (rest === 0) {
            console.log(`${numar} este par si are intre 3 si 5 cifre`);
        } 
        else console.log(`${numar} nu este par si are intre 3 si 5 cifre`);
    }
    else console.log(`${numar} are mai mult de 5 cifre`);
}