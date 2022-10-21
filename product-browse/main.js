const searchInput = document.querySelector("#searchInput");
const minPriceInput = document.querySelector("#minPrice");
const maxPriceInput = document.querySelector("#maxPrice");
const tableBody = document.querySelector("#tableBody");
const searchBtn = document.querySelector("#searchBtn");

const computeTableContent = (data) => {
    return data.map(product => (
        `
            <tr>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.availableInSizes ? "Da" : "Nu"}  </td>
            </tr>
        `
    )).join();
}

const searchData = (data, term, min, max) => {
    return data.filter(product => {
        return product.name === term &&
                product.price > min &&
                product.price < max;
    });
}

searchBtn.addEventListener("click", function(){
    const term = searchInput.value;
    const min = Number(minPriceInput.value ?? 0);
    const max = Number(maxPriceInput.value ?? 0);
    tableBody.innerHTML = computeTableContent(searchData(DATA,term,min,max));
});


tableBody.innerHTML = computeTableContent(DATA);