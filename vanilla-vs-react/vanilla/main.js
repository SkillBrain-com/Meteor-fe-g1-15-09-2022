/*VIEW SELECTORS */
const SELECTORS = [
  "booksTable",
  "searchInput",
  "addBookModal"
].reduce((acc, idName) => ({...acc,[idName]: document.querySelector(`#${idName}`)}), {});

/*HELPERS */
async function getBooks(){
  const url = "https://meteor-api.smart-part.ro/books";
  const response = await fetch(url);

  if (response.status !== 200) {
    return null;
  }

  const data = await response.json();
  return data;
}

/*MODEL */
const MODEL = {
  bookList: [],
  filteredBookList: [],
  showModal: false
};

/* VIEW RENDER */
function createBookRow(book){
  const {author, title} = book;
  const row = document.createElement('tr');
  const colClass = "border p-2";

  const titleCol = document.createElement('td');
  titleCol.innerText = title;
  titleCol.className = colClass;
  row.appendChild(titleCol);

  const authorCol = document.createElement('td');
  authorCol.innerText = author;
  authorCol.className = colClass;
  row.appendChild(authorCol);

  return row;
}

function renderTableContent(bookList){
  SELECTORS.booksTable.innerHTML = "";
  for(let i = 0;i < bookList.length; i++) {
    const book = bookList[i];
    const bookRow = createBookRow(book);
    SELECTORS.booksTable.appendChild(bookRow);
  }
}

function render(){
  renderTableContent(MODEL.filteredBookList);
}

/*CONTROLLERS */
function initController(){
  getBooks()
    .then((bookList) => {
      if (bookList === null){
        return;
      }
      
      MODEL.bookList = bookList;
      MODEL.filteredBookList = bookList;
      render();
    });
}

function searchItems(){
  const searchTerm = SELECTORS.searchInput.value;
  console.log(searchTerm)
  if (searchTerm.length > 0) {
    MODEL.filteredBookList = MODEL.bookList.filter((book) => book.title.toLowerCase().includes(searchTerm));
  }
  else {
    MODEL.filteredBookList = MODEL.bookList;
  }
  render();
}

initController();
SELECTORS.searchInput.addEventListener('keyup', searchItems);