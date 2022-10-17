function fizzbuzz(number){
for(let counter = 1; counter <= number; counter++)
{
    if(counter % 3 === 0)
    {
        console.log("Fizz");
        if(counter % 5 === 0)
        { console.log("Buzz\n");
        }
         else {console.log("\n");
        }
    }
    else if (counter % 5 === 0){
        console.log("Buzz\n");
    }
}
}
