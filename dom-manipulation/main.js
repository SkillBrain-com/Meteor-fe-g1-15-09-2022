const DOM = {
    nodeName: "html",
    children: [
        {
            nodeName: "head",
            children: [
                {
                    nodeName: "title",
                    innerText: "Document"
                }
            ]
        },
        {
            nodeName: "body",
            children: [
                {
                    nodeName: "div",
                    classList: ["box"],
                    children:[
                        {
                            nodeName: "div",
                            classList: ["blue-bg"],
                            children:[
                                {
                                    nodeName: "h1",
                                    innerText: "Heading 1",
                                    id: "targetHeading"
                                },
                                {
                                    nodeName: "h1",
                                    innerText: "Heading 2"
                                }       
                            ]
                        },
                        {
                            nodeName: "div",
                            classList: ["red-bg"],
                            children:[
                                {
                                    nodeName: "h1",
                                    innerText: "Heading 1"
                                },
                                {
                                    nodeName: "h1",
                                    innerText: "Heading 2"
                                }       
                            ]
                        }      
                    ]
                }
            ]
        }       
    ]
}


function sum(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function times(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function doOperation(a, b, operation) {
    return operation(a, b);
}

console.log(doOperation(10, 20, sum));
console.log(doOperation(10, 20, subtract));
console.log(doOperation(10, 20, times));
console.log(doOperation(10, 20, divide));

console.log(doOperation(10, 20, function(a,b){
    return a + b * 10;
}));