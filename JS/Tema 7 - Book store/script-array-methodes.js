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

const bodyTabelBooks = document.querySelector("#body-tabel-books");
const searchBtn = document.querySelector("#search-btn");
const valueInputText = document.querySelector("#search-text").value;

const bookListCopy = [...completeBookList];

buildTable(completeBookList);

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

function filterByName(bookListCopy, valueInputText) {
  const newList = [];
  for (let i = 0; i < bookListCopy.length; i++) {
    const book = bookListCopy[i];
    if (book.titlu.includes(valueInputText)) {
      newList.push(book);
    }
  }

  return newList;
}

function searchTable(value, book) {
  let filteredBooks = [];
  for (let i = 0; i < book.length; i++) {
    value = value.toLowerCase();
    let name = book[i].titlu.toLowerCase();
    if (name.includes(value)) {
      filteredBooks.push(book[i]);
    }
  }
  return filteredBooks;
}

// const filterByName = (bookListCopy, valueInputText) =>
//   bookListCopy.filter((book) => book.titlu.includes(valueInputText));

document
  .querySelector("#search-btn")
  .addEventListener("click", filterByName(bookListCopy, valueInputText));

//////////////////////////////////////////////////////////////////////////////////////////////////////

// bookListCopy.forEach((book) => {
//   const row = document.createElement("tr");

//   const titleCell = document.createElement("td");
//   titleCell.innerText = book.titlu;
//   row.appendChild(titleCell);

//   const writerCell = document.createElement("td");
//   writerCell.innerText = book.autor;
//   row.appendChild(writerCell);

//   const readersNumberCell = document.createElement("td");
//   readersNumberCell.innerText = `${book.numarCititori}`;
//   row.appendChild(readersNumberCell);

//   bodyTabelBooks.appendChild(row);
// });
