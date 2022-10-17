const message = prompt('Enter a message: ');
displayData(returnJson(message));

function returnJson(str) {
    let obj = {};
    obj["message"] = str;
    obj["reversed"] = reversed(str);
    obj["wordCount"] = wordCount(str);
    return obj;
}

// reverse the order of words inside the message
function reversed(str) {
    return str.split(" ").reverse().join(' ');
}

function wordCount(str) {
    return str.split(" ").length;
}

function displayData(obj) {
    for (let i in obj) {
        document.getElementById("result").innerHTML +=  obj[i] + "<br>";
    };
}
