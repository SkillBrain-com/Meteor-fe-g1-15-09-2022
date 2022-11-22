// // 1. Scrieți un cod JS pentru a imprima numerele de la 1 la 10
function printeazaNumerele () {
    for(let i = 1; i < 11; i++ )
    console.log(i)
}
printeazaNumerele();

// 2. Scrieți un cod JS pentru a imprima o matrice 2D
// Funcția `printArray()` tipărește toate elementele unui tablou 2D folosind bucle imbricate for

// function printArray(arr) {
//     for(let i = 0; i < arr.length; i++)
//     for(let j = 0; j < arr[0].length; j++)
//     console.log([])
// }

var arr = [[1, 2],
             [3, 4],
             [5, 6]];
  
function printArray(arr) {
    for (var i=0;i<arr.length;i++){
      for(var j=0;j<arr[0].length;j++){
        console.log(arr[i][j]);
      }   
    }
  }
  
  printArray(arr)


//   3. Scrieți un cod JS pentru a imprima numerele pare în matricea dată
// Funcția `printEven()` tipărește toate numerele pare ale unui tablou 2D folosind
// bucle for și operatorul '%'.

var arr = [13,23,12,45,22,48,66,100]
function printEven (arr) {
    for(i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            console.log(arr[i])
        }
    }
}

printEven(arr);


// 4. Scrieți un cod JS pentru a șterge toate aparițiile elementului din matricea dată
// Funcția `deleteElement()` șterge toată apariția elementului din tabloul dat.

var arr = [23,56,4,78,5,63,45,210,56];
arr = deleteElement(arr, 56)

function deleteElement(arr, elem) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === elem) {
            arr.splice(i, 1)
        }
    }
    return arr;
}

console.log(arr);


// 5. Scrieți un cod JS pentru a demonstra bucla asincronă
// Pentru bucla constând din funcția setTimeout() pentru a imprima 
// variabila buclă de 5 ori în mod asincron.

// for(i=0; i < 8; i++) {
//     setTimeout(() => console.log(i),)
// }


// 6. Scrieți un cod JS pentru a găsi puterea unui număr folosind bucla for
// Funcția numPower() to returnează puterea numărului pentru valoarea exponențială 
// furnizată folosind bucla for.

function numPower(num, pow) {
    let res = 1     // return 1 for pow = 0
    for (let i = 0; i < pow; i++) {
        res = res * num  
    }
    return res
}
console.log(numPower(4,3))
console.log(numPower(16, 2))

// 8. Scrieți un cod JS pentru a găsi numărul de cifre dintr-un număr
// Funcția digitCount() to returnează numărul de cifre dintr-un număr dat folosind bucla while.

function digitCount(num) {
    var count=0; //return 1 for pow=0
    while(num!=0){
      num=Math.floor(num/10);
      count++;
    }
    return count;
  }
  console.log(digitCount(8367)); //4
  console.log(digitCount(563349)); //6

  console.log("hello world")

  document.cookie = "SameSite=None"