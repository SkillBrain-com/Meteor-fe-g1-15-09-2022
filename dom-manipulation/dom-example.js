/**
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <div class="box">
        <div class="blue-bg">
            <h1 id="targetHeading">Heading 1</h1>
            <h1>Heading 2</h1>
        </div>
        <div class="red-bg">
            <h2>Heading 1</h2>
            <h2>Heading 2</h2>
        </div>
    </div>
    <script src="main.js"></script>
</body>
</html>
 */

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