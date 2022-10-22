console.log(`Tema 2 - Structura decizionala`);
console.log(`Exercitiul 2`);

for (var n = 0; n < 0; n++);

const lungimeaNumarului = (n) => {
    return n.length;
}

    if(n.length < 3) {
        console.log(`${n} are mai putin de 3 cifre`);
    }
    
    else if(n.length >= 3 && n.length < 5 && (n % 2 === 0)) {
        console.log(`${n} este par si are intre 3 si 5 cifre`);
    }
    
    else if(n.length >= 3 && n.length < 5 && (n % 2 === 1)) {
        console.log(`${n} este impar si are intre 3 si 5 cifre`);
    }

    else if (n.length > 5) {
        console.log(`${n} are mai mult de 5 cifre`);
    }

    else {
        console.log(`numarul nu se incadreaza in nici un criteriu`);
    }


//const n.stripped.length = function(n);
//return n.toString().length;