function fizzbuzz(number){
for(let counter = 1; counter <= number; counter++){
    if(counter % 15 === 0) {
        console.log("FizzBuzz");
        continue;
      }
      
      if(counter % 5 === 0) {
        console.log("Buzz");
        continue;
      }
      
      if(counter % 3 === 0) {
        console.log("Fizz");
        continue;
      }
}
}
  