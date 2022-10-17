const list = [1, 3, 1, 5, 3, 2];
displayData(formatResult(countList(list))) ;


function countList (ls) {
    const countMap = {}; // va contine nr de aparitii in lista
    ls.forEach((x) => countMap[x] = (countMap[x] || 0) + 1);
    return countMap;
}

function formatResult(obj) {
    let result = "";
    Object.keys(obj).sort().forEach((key) => result += `${key} - ${obj[key]} aparitii` + '<br>');
    return result; 
}

function displayData(txtObj) {
    document.getElementById("result").innerHTML = txtObj;
}
