let btnSubmit = document.getElementById("btn-submit");
btnSubmit.onclick = function() {
    let input = parseInt(document.getElementById("input-number").value);
    displayData(fizzBuz(input));
} 


function fizzBuz(n) {
    if (!validate(n)) {
      return "!!! Number is not valid. Please re-enter a number between 1 and 100 !!!";
    }
    
    let result = "";
    
    for (let i=1; i <= n; i++) {
      result += "\nn = " + i + "\t >> " + applyRules(i);
    }
  
    return result;
}


function applyRules(i) {
    if ( i % 15 === 0) {
      return "FizzBuzz";
    }
    
    if ( i % 5 === 0) {
      return "Buzz";
    }
    
    if ( i % 3 === 0) {
      return "Fizz";
    }
    
    return "";
}


function validate(nr) {
    return nr >= 1 && nr <= 100;
}


function displayData(str) {
    document.getElementById("result").style = "display: content; border: none";
    document.getElementById("result").innerHTML = str; 
}
