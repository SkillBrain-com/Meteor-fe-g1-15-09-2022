// 1. Verificați dacă un număr este par sau impar în JavaScript

// Funcția `isEvenOrOdd()` verifică dacă numărul de intrare este par sau impar folosind
//  operatorul „%” în JavaScript.

// Tipăriți „Numărul este par” dacă numărul este divizibil cu 2.
// Altfel, tipăriți „Numărul este impar” dacă numărul returnează un rest atunci când este 
// împărțit la 2.
 
function isEvenOrOdd (num){
    if(num % 2 === 0)
    console.log(`Numarul este par`)
    else {
        console.log(`Numarul este impar`)
    }
}


isEvenOrOdd(5)
isEvenOrOdd(32)

// 2. Verificați dacă variabila de intrare este un număr sau nu
// Funcția `isNumber()` verifică dacă variabila de intrare este un număr utilizând
//  funcția JavaScript încorporată isNaN(). Citiți mai multe despre 
//  isNan() de la w3schools.com/jsref/jsref_isnan.asp .

// Tipăriți „Variabila nu este un număr” dacă isNaN() returnează adevărat.
// Altfel se afișează „Variabila este un număr valid” dacă isNaN() returnează false.

function validatorNumber (num) {
    if(isNaN(num)) {
        console.log(`${num} nu este un numar`)
    } 
    else {
        console.log(`${num} este un numar`)
    }
}
 validatorNumber(67,8);
 validatorNumber("gehge");
 validatorNumber(44);


//  3. Găsiți cel mai mare dintre două numere
// Funcția `findLargest()` găsește cel mai mare dintre două numere folosind 
// operatorul „>” și ​​„=" în JavaScript.

// Print num1 este cel mai mare dacă num1>num2.
// Print num2 este cel mai mare dacă num1<num2.
// În caz contrar, imprimați num1 și num2 sunt egale când num1==num2


function findLargest (num1,num2) {
    if(num1>num2) {
        console.log(`${num1} este mai mare`)
    }
    else if(num1<num2)
    console.log(`${num2} este mai mare`)
    else(num1=num2)
    console.log(`Numerele sunt egale`)
}

findLargest(44, 45)
findLargest(66, 76)
findLargest(55, 55)

// function findLargest(num1,num2) {
//     if(num1>num2) {
//         console.log(`${num1} este mai mare decat ${num2}`)
//     }
//     else if(num1<num2) {
//         console.log(`${num2} este mai mare decat ${num1}`)

//     }
//     else {
//         console.log (`${num1} si ${num2} sunt egale`)
//     }
// }
// findLargest(45, 67);
// findLargest(12, 11);
// findLargest(66, 66);


// 4. Găsiți cel mai mare dintre trei număr
// Funcția `findLargest()` găsește cel mai mare dintre cele trei numere 
// folosind operatorul „>” și ​​„&&” în JavaScript.

// Print num1 este cel mai mare dacă num1>num2 și num1>num3.
// Print num2 este cel mai mare dacă num2<num3.
// Altfel tipăriți num3.

function findLargest2 (n1,n2,n3) {
    if (n1>n2 && n1>n3) {
        console.log(`${n1} este mai mare `)
    }
    else if (n2>n3) {
        console.log(`${n2} este mai mare`)
    }
    else{
        console.log(`${n3} este mai mare`)
    }

}

findLargest2(37, 67, 88)
findLargest2(2, 89, 7)
findLargest2(68, 44, 6)

// 5. Verificați dacă un triunghi este echilateral, scalen sau isoscel
// Funcția `findTriangleType()` găsește tipul triunghiului pentru valorile laturilor
// date utilizând operatorul „==” și „&&” în JavaScript.

// Tipăriți „Triunghi echilateral”. dacă valorile pentru toate side1, side2 și side3 sunt egale.
// Tipăriți „Triunghi isoscel”. dacă valorile pentru side1 este egală cu side2 sau side2 
// este egală cu side3
// Altfel „triunghi scalen”. deoarece valorile tuturor laturilor sunt inegale.

function findTriangleType (side1, side2, side3) {
    if(side1 === side2 && side1=== side3) {
        console.log(`Triunghiul este echilateral`)
    }
    else if (side1 === side2 || side2 === side3 || side1 === side3)
           console.log(`Triunghiul este isoscel`)
    else {
        console.log(`Triunghiul este scalen`)
    }
}

findTriangleType(34,44,67)
findTriangleType(23,6,23)
findTriangleType(22,22,22)

// 6. Găsiți un număr prezent într-un interval dat
// Funcția `checkInRange()` găsește dacă numărul dat se află în intervalul de început 
// și de sfârșit furnizat folosind operatorii >=, <= și && în JavaScript.

// Tipăriți „Între interval” dacă num este între valorile de început și de sfârșit
// Altfel Imprimați „În afara intervalului”, deoarece num este în afara valorilor de 
// început și de sfârșit.

function checkInRange(num,start,end) {
    if (num>=start && num<=end) {
        console.log(`${num} este intre ${start} si ${end} `)
    }
    else{
        console.log(`${num} este in afara intervalului ${start} si ${end}`)
    }

}

checkInRange(22, 45, 67)   //primul nr rep. num    , al doilea rep. start, al treilea rep. end
checkInRange(57, 44,2 )      
checkInRange(23,22,34)


// 7. Efectuați operații aritmetice pe două numere
// Funcția `evalNumbers()` afișează rezultatul după evaluarea operațiilor
//  aritmetice între două numere de adunare, înmulțire, împărțire și modul în JavaScript.
//  Imprimați rezultatul num1+num2 dacă operația este „adăugați”
// Imprimați rezultatul num1-num2 dacă operația este „scădere”
// Imprimați rezultatul num1*num2 dacă operația este „înmulțire”
// Imprimați rezultatul num1/num2 dacă operația este „împărțire”
// Imprimați rezultatul num1%num2 dacă operația este „modulus”
// Altfel, imprimați „Operațiune nevalidă”

function evalNumbers (num1, num2, operatie) {
    if( operatie === "adunare") {
        console.log(`Suma a ${num1} si ${num2} este ${num1+num2}`)
    }
    else if(operatie === "scadere") {
        console.log(`Scaderea a ${num1} si ${num2} este ${num1-num2}`)
    }
    else if(operatie === "inmultire") {
        console.log(`Inmultirea a ${num1} si ${num2} este ${num1*num2}`)
    }
    else if(operatie === "impartire") {
        console.log(`Impartirea a ${num1} si ${num2} este ${num1/num2}`)
    }
    else(operatie === "modul") 
        console.log(`Restul a ${num1} si ${num2} este ${num1%num2}`)
    
}

evalNumbers(1, 5, "adunare")
evalNumbers(17, 4, "modul")     // DECI, ORDINEA PE CARE AM PUS-O AICI LA "adunare", "modul", 
                                    //"inmultire", .... CONTEAZA
evalNumbers(267,577, "inmultire")      // LE IA PE TOATE LA RAND 
evalNumbers(55, 5, "impartire")
evalNumbers(56, 6, "scadere")

// evalNumbers(10,5 ,"adunare")
// evalNumbers(20,8,"scadere") 
// evalNumbers(12,4,"inmultire") //"Product of 12 and 4 is 48"
// evalNumbers(28,7,"impartire") //"Division of 28 and 7 is 4"
// evalNumbers(22,3,"modulu") //"Modulus of 22 and 3 is 1"


// 8. Găsiți verifica dacă un an este sau nu an bisect
// Funcția `checkLeapYear()` găsește dacă anul dat este un an bisect
//  sau nu utilizând %, !=, && și || operatori în JavaScript.
//  Dacă anul este divizibil cu 4 și nu este divizibil cu 100, imprimați „an bisect”.
// Sau dacă anul este divizibil cu 400, imprimați „an bisect”.
// Altfel, imprimați „nu este un an bisect”

function checkLeapYear(year) {
 if((year % 4 === 0 && year %100 !== 0) || year % 400 === 0) {
    console.log(`Anul ${year} este an bisect`)
 }

 else {
    console.log(`${year} Nu este an bisect`)

 } 
}

checkLeapYear (5778)
checkLeapYear(437)
checkLeapYear(2024)


// 9. Găsiți nota pentru notele introduse
// Funcția `findGrade()` pentru a găsi nota elevului pe baza notelor introduse.

// Tipăriți „Nota S” dacă notele sunt între 90 și 100.
// Tipăriți „Notă A” dacă notele sunt între 80 și 90.
// Tipăriți „Nota B” dacă notele sunt între 70 și 80.
// Tipăriți „C grade” dacă notele sunt între 60 și 70.
// Tipăriți „Nota D” dacă notele sunt între 50 și 60.
// Tipăriți „Nota E” dacă notele sunt între 40 și 50.
// Tipăriți „Studentul a eșuat” dacă notele sunt între 0 și 40.
// În caz contrar, imprimați „Marcă nevalidă”.


function findGrade ( name, marks) {
    if(marks >= 90 && marks >= 100) {
        console.log(`${name} recevied S marks`)
    }
    else if (marks >= 80 && marks < 90) {
        console.log(`${name} recevied A marks`)
    }
    else if (marks >= 70 && marks < 80) {
        console.log(`${name} recevied B marks`)
    }
    else if (marks >= 60 && marks < 70) {
        console.log(`${name} recevied C marks`)
    }
    else if (marks >= 50 && marks < 60) {
        console.log(`${name} recevied D marks`)
    }
    else if (marks >= 40 && marks < 50) {
        console.log(`${name} recevied E marks`)
    }
    else if (marks >= 0 && marks < 40) {
        console.log(`${name} you have failed`)
    }
    else {
        console.log (`invalied marks of ${marks}`)
    }
}

findGrade("John Doe", 91) //"John Doe you have received S grade"
findGrade("John Doe", 85) //"John Doe you have received A grade"
findGrade("John Doe", 73) //"John Doe you have received B grade"
findGrade("John Doe", 53) //"John Doe you have received D grade"
findGrade("John Doe", 20) //"John Doe you have Failed"
findGrade("John Doe", 120) //"Invalid marks of 120


// 10. Aflați numărul de zile dintr-o lună dată
// Funcția `findDaysInMonth()` găsește numărul de zile dintr-o anumită lună a unui an.

// Dacă luna se află în afara intervalului 1 și 12, imprimați „Lună invalidă”.
// Dacă luna este egală cu 2, adică, februarie tipăriți „29 de zile” dacă an bisect, 
// altfel imprimați „28 de zile”.
// Altfel, dacă luna este egală cu 4, 6, 9 sau 11, imprimați „30 de zile”.
// Altfel, imprimați „31 de zile”.

// function(isLeapYear) {
//     return ((year % 4 === 0 && year %100 !==0) || year % 400 ===0)
// }
//     function findDaysInMonth (month, year) {
//         if(month <1 || month > 12 ) {
            
//         }
//     } 