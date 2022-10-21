const DATA = [];
const priceInput = document.querySelector("#priceInput");
const unitCountInput = document.querySelector("#unitCountInput");
const sharesSection = document.querySelector("#sharesSection");
const addToStockButton = document.querySelector("#addToStockButton");

function dca(stock) {
    let sum = 0;
    let unitSum = 0;

    if (stock.length === 0) {
        return 0;
    }

    for (let i = 0; i < stock.length; i++) {
        sum += stock[i].price * stock[i].unitCount;
        unitSum += stock[i].unitCount;
    }

    return sum / unitSum;
}

function addShareToData(){
    const priceValue = Number(priceInput.value);
    const unitCountValue = Number(unitCountInput.value);

    const share = {
        price: priceValue,
        unitCount: unitCountValue
    };

    DATA.push(share);
}

function renderData(stock) {
    let html = "";
    const dcaResult = dca(stock);
    for (let i = 0; i < stock.length; i++) {
        html += `
            <div class="flex">
                <div class="cell">
                    <h5>Price</h5>
                    <h5>${stock[i].price.toFixed(2)}</h5>
                </div>
                <div class="cell">
                    <h5>Unit count</h5>
                    <h5>${stock[i].unitCount.toFixed(2)}</h5>
                </div>
                <div class="cell">
                    <h5>Value</h5>
                    <h5>${stock[i].price * stock[i].unitCount}</h5>
                </div>
            </div>
        `;
    }

    html += `
        <div>
            <h1>DCA ${dcaResult.toFixed(2)} LEI </h1>
        </div>
    `;

    sharesSection.innerHTML = html;
}

addToStockButton.addEventListener("click", function(){
    addShareToData();
    priceInput.value = "";
    unitCountInput.value = "";
    renderData(DATA);
});

renderData(DATA);