//TIMER
setTimeout(function(){
    console.log("I1");
    console.log("Am ajuns dupa 2000 de milisecunde");
    setTimeout(function(){
        console.log("I4");
        console.log("Am ajuns dupa 4000 de milisecunde");
    }, 2000);
}, 2000);

setTimeout(function(){
    console.log("I3");
    console.log("Am ajuns dupa 1000 de milisecunde");
}, 1000);

console.log("I2");





// const promisiune = new Promise(function(resolve, reject){
//     resolve(20);
// });

// console.log(promisiune);

