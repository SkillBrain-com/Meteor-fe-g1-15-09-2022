console.log("Tema 1 - Avansati");
console.log("Fizz&Buzz");

for (var n = 1; n < 101; n++) {
    if (n % 15 === 0) {
        console.log("FizzBuzz");
    }
    
    else if (n % 3 === 0) {
        console.log("Fizz");
    }
    
    else if (n % 5 === 0) {
        console.log("Buzz");
    }

    else console.log(n);
}


