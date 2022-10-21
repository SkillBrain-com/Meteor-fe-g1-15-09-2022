const DATA = [
    {
        price: 10.00,
        unitCount: 10,
    },
    {
        price: 12.50,
        unitCount: 4,
    },
    {
        price: 11.00,
        unitCount: 2,
    },
];
const priceInput = document.querySelector("#priceInput");
const unitCountInput = document.querySelector("#unitCountInput");
const sharesSection = document.querySelector("#sharesSection");

function dca(stock) {
    let sum = 0;
    let unitSum = 0;
    for (let i = 0; i < stock.length; i++) {
        sum += stock[i].price * stock[i].unitCount;
        unitSum += stock[i].unitCount;
    }
    return sum / unitSum;
}

function addShareToData(){
    const priceValue = priceInput.value;
    const unitCountValue = unitCountInput.value;

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
                    <h6>Price</h6>
                    <h6>${stock[i].price}</h6>
                </div>
                <div class="cell">
                    <h6>Unit count</h6>
                    <h6>${stock[i].unitCount}</h6>
                </div>
                <div class="cell">
                    <h6>Value</h6>
                    <h6>${stock[i].price * stock[i].unitCount}</h6>
                </div>
            </div>
        `;
    }

    html += `
        <div>
            <h1>DCA ${dcaResult} LEI </h1>
        </div>
    `;

    sharesSection.innerHTML = html;
}


renderData(DATA);