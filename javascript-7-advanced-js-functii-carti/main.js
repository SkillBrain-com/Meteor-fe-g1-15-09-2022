const list = [
{
    titlu: "The computer and the brain",
    autor: "John von Neumann",
    numarCititori: 32,
},
{
    titlu: "Arhitectura calcualtoarelor",
    autor: "John von Neumann",
    numarCititori: 24,
},
{
    titlu: "A beutiful mind",
    autor: "Alan Turring",
    numarCititori: 21,
},
{
    titlu: "The incompletness theory",
    autor: "Karl Godel",
    numarCititori: 28,
},
{
    titlu: "Information theory",
    autor: "Shannon",
    numarCititori: 12,
}
];

//[].map
// functie care extrage(creeaza o lista noua cu) toate numele dintr-o lista de carti
function extractTitles (bookList) {
const newList = [];
for (let i = 0; i < bookList.length; i++) {
    const book = bookList[i];
    newList.push(book.title);
}

return newList;
}

const extractTitlesMap = (bookList) => bookList.map((book) => book.title);

// functie care extrage cartile care au numele autorul cu un anumit sir de caractere(text) nn -> Shannon, Neumann

function filterByName (bookList, searchTerm) {
const newList = [];
for (let i = 0; i < bookList.length; i ++) {
    const book = bookList[i];
    if (book.autor.includes(searchTerm)){
    newList.push(book);
    }
}
return newList;
}

const filterByNameFilter = (bookList, searchTerm) => bookList.filter((book) => book.autor.includes(searchTerm));

// functie care extrage cartile care au numarCititori mai mare decat un numar arbitrar (30) -> 
function filterByReaderCount (bookList, numarMinimCititori) {
const newList =[];
for (let i=0; i< bookList.length; i++){
    const book =bookList[i];
    if(book.numarCititori > numarMinimCititori){
    newList.push(book);
    }
}
return newList;
}

const filterByReaderCountFilter = (bookList,numarMinimCititori) => bookList.filter((book) => book.numarCititori > numarMinimCititori);

// functie care ne insumeaza numarul de cititori
function sumReaderCount(bookList) {
let sum = 0;
for (let i=0; i< bookList.length; i++) {
    const book = bookList[i];
    sum = sum + book.numarCititori;  
}

return sum;
}
const sumReaderCountReduce = (bookList) => bookList.reduce((sum, book) => sum + book.numarCititori, 0);

// functie care ne gaseste a cata carte are un nume de autor anume

// functie care ne gaseste cartea care un nume de autor anume

// functie care verifica daca toate cartile au mai multi cititori decat un numar arbitrar

// functie care verifica daca exista cel putin o carte care are mai multi cititori decat un numar

// functie care ne insumeaza numarul de cititori ai unei carti care au un anumit autor

