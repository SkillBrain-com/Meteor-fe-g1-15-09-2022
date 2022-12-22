// // putem folosi await pe un promise DOAR in functii async
// async function main() {
//     const promisiuneMasinaDeSpalat = new Promise(function(resolve, reject) {
//         console.log("Acuma a pornit masina de spalat");

//         setTimeout(function(){
//             const rufeleSauSpalatCuSucces = Math.random() < 0.5;

//             if (rufeleSauSpalatCuSucces === true) {
//                 resolve("Rufele au fost spalate");
//             }
//             else {
//                 reject("Masina de spalat s-a blocat");
//             }
//         }, 2000);
//     });

//     try {
//         console.log(await promisiuneMasinaDeSpalat);
//     }
//     catch(error) {
//         console.log(`Spalarea a esuat din cauza: ${error}`);
//     }

//     console.log("Programul s-a sfarsit");
// }

// main();

// async function createBook(title, author){
//     const url = "https://meteor-api.smart-part.ro/books?key=234332134";
//     const response = await fetch(url, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             title: title,
//             author: author
//         })
//     });

//     if (response.status !== 201) {
//         console.log("S-a produs o eroare la cererea datelor");
//         const node = document.createElement('h2');
//         node.innerText = "S-a produs o eroare la cererea datelor";
//         document.body.appendChild(node)
//     }

//     const data = await response.json();

//     const node = document.createElement('h2');
//     node.innerText = data.title;
//     document.body.appendChild(node);
// }

// async function getAllBooks(){
//     const url = "https://meteor-api.smart-part.ro/books?titleSearchTerm=z";
//     const response = await fetch(url);

//     if (response.status !== 200) {
//         console.log("S-a produs o eroare la creearea unei noi carti");
//         const node = document.createElement('h2');
//         node.innerText = "S-a produs o eroare la cererea datelor";
//         document.body.appendChild(node)
//     }

//     const data = await response.json();

//     data
//         .map((book) => {
//             const node = document.createElement('h2');
//             node.innerText = book.title;
//             return node;
//         })
//         .forEach((heading) => document.body.appendChild(heading));
// }

// async function main() {
//     await getAllBooks();
//     // await createBook("Ion", "Liviu Rebreanu");
// }

// main();

// // https://meteor-api.smart-part.ro/books

async function getBookByName(name) {
    const parsedName = name.toLowerCase().replaceAll(" ", "-");

    const url = `https://meteor-api.smart-part.ro/books/${parsedName}`;
    const response = await fetch(url, { method: "GET" });
    const dataJson = await response.json();
    console.log(dataJson);
}

getBookByName("The Witcher");

async function createBook(author, title) {
    const dto = {
        author: author,
        title: title
    };

    const options = {
        method: "POST",
        body: JSON.stringify(dto),
        headers: {
            "Content-Type": "application/json"
        },
    };


    const url = "https://meteor-api.smart-part.ro/books";
    const response = await fetch(url, options);
    const dataJson = await response.json();
    console.log(dataJson);
}

// createBook("Andrei Sapkopski","The Witcher");