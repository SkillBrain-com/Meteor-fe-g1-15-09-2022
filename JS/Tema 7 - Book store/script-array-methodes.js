/* Book store
Construieste o aplicatie care afiseaza o lista de carti. Lista trebuie sa contina cel putin 10 carti

Functionalitati
- Initial aplicatia v-a afisa toate cartile
- Utilizatorul poate scrie un nume de carte(sau o parte din numele cartii) si in 
    momentul in care apasa pe cauta, i se vor afisa rezultatele pentru accea cautare
- In momentul in care utiliatorul cauta un termen un buton cu textul “Reseteaza cautarea”
    va aparea iar la apasare, v-a goli textul introdus initial si va afisa din nou toate cartile
- In momentul in care utilizatorul cauta un termen, un text va fi afisat deasupra tabelului
    si va afisa numarul de rezultate pentru aceea cautare 
    
Functionalitati extra
- cautarea sa se poata face si dupa numele autorului sau o parte din numele autorului
- cautarea va afisa un text cu numarul total de cititori pentru aceea carte   */

const completeBookList = [
  {
    titlu: "Ultima noapte de dragoste, întâia noapte de război",
    autor: "Camil Petrescu",
    numarCititori: 15232,
  },
  {
    titlu: "Maytrei",
    autor: "Mircea Eliade",
    numarCititori: 14522,
  },
  {
    titlu: "Cel mai iubit dintre pământeni",
    autor: "Marin Preda",
    numarCititori: 13200,
  },
  {
    titlu: "Pădurea spânzuraților",
    autor: "Liviu Rebreanu",
    numarCititori: 6014,
  },
  {
    titlu: "Ion",
    autor: "Liviu Rebreanu",
    numarCititori: 18821,
  },
  {
    titlu: "Enigma Otiliei",
    autor: "George Călinescu",
    numarCititori: 16548,
  },
  {
    titlu: "Moromeții I",
    autor: "Marin Preda",
    numarCititori: 18622,
  },
  {
    titlu: "Invitație la vals",
    autor: "Mihail Drumeș",
    numarCititori: 4257,
  },
  {
    titlu: "Nuntă în cer",
    autor: "Mircea Eliade",
    numarCititori: 6848,
  },
  {
    titlu: "Lorelei",
    autor: "Ionel Teodoreanu",
    numarCititori: 2521,
  },
  {
    titlu: "Momente și schițe",
    autor: "Ion Luca Caragiale",
    numarCititori: 7541,
  },
];

//////////////////////////// model ////////////////////////////////////////////////////

const bodyTabelBooks = document.querySelector("#body-tabel-books");
const searchBtn = document.querySelector("#search-btn");
const valueInputText = document.querySelector("#search-text");
const resetBtn = document.querySelector("#reset-btn");
const resultsNumber = document.querySelector("#results-number");

const bookListCopy = [...completeBookList];

/////////////////////////////// view ///////////////////////////////////////

function buildTable(book) {
  let table = bodyTabelBooks;
  table.innerHTML = "";
  for (let i = 0; i < book.length; i++) {
    let row = `<tr>
        <td>${book[i].titlu}</td>
        <td>${book[i].autor}</td>
        <td>${book[i].numarCititori}</td>
      </tr>`;
    table.innerHTML += row;
  }
}
buildTable(bookListCopy);

// const filteredBooks = (bookList, value) =>
//   bookList.filter((book) => book.titlu.includes(value));

///////////////// la arrow function nu stiu sa adaug toLowerCase //////////////////////////////////

function filteredBooks(bookList, value) {
  const filteredBooksList = [];
  for (let i = 0; i < bookList.length; i++) {
    value = value.toLowerCase();
    let book = bookList[i].titlu.toLowerCase();
    if (book.includes(value)) {
      filteredBooksList.push(bookList[i]);
    }
  }
  return filteredBooksList;
}

function displayFilteredBooks() {
  searchedText = document.querySelector("#search-text").value;
  const selectedBooks = filteredBooks(bookListCopy, searchedText);
  buildTable(selectedBooks);
}

function dispayResetBtn() {
  if (valueInputText.value === "") {
    resetBtn.hidden = true;
  } else {
    resetBtn.hidden = false;
  }
}
dispayResetBtn(valueInputText);

function searchResultNumber() {
  const results = filteredBooks(bookListCopy, searchedText).length;
  resultsNumber.innerText = `Numar rezultate: ${results}`;
}

function showResultNumber() {}

searchBtn.addEventListener("click", () => {
  displayFilteredBooks();
  searchResultNumber();
});

valueInputText.addEventListener("keyup", () => {
  dispayResetBtn();
});

resetBtn.addEventListener("click", () => {
  buildTable(bookListCopy);
  valueInputText.value = null;
});
