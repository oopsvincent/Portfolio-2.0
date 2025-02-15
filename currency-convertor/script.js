const currenciesSelectFrom = document.getElementById("currenciesFrom");
const currenciesSelectTo = document.getElementById("currenciesTo");

const fromValue = document.getElementById('fromInput');
const toValue = document.getElementById('toInput');

const submitButton = document.getElementById('submit');

let fromCurr, toCurr;
let exchangeRate = null;

async function populateDropdown() {
    try {
        let response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json');
        let data = await response.json();

        // console.log(data);

        for (let key in data) {
            // console.log(key);

            let optionFrom = document.createElement('option');
            optionFrom.textContent = `${data[key]} (${key.toUpperCase()})`;
            optionFrom.value = key;
            currenciesSelectFrom.appendChild(optionFrom);

            let optionTo = document.createElement('option');
            optionTo.textContent = `${data[key]} (${key.toUpperCase()})`;
            optionTo.value = key;
            currenciesSelectTo.appendChild(optionTo);
        }
    } catch (error) {
        console.error(error);
    }
}

currenciesSelectFrom.addEventListener("change", (event) => {
    // console.log(event.target.value);

    fromCurr = event.target.value;
    // getData(fromCurr, toCurr);
if (fromCurr && toCurr) {
    getData(fromCurr, toCurr);
}

});

currenciesSelectTo.addEventListener("change", (event) => {
    // console.log(event.target.value);
    
    toCurr = event.target.value;
    if (fromCurr && toCurr) {
        getData(fromCurr, toCurr);
    }
    
});

async function getData(currencyFrom, currencyTo) {
    try {
        // console.log(currencyFrom, currencyTo);
        let response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyFrom}.json`);
        let data = await response.json(); // Convert response to JSON
        // console.log(data[currencyFrom][currencyTo]);
        exchangeRate = data[currencyFrom][currencyTo];
        
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

submitButton.addEventListener("click", () => {
    let value = parseFloat(fromValue.value); // Convert input to number

    if (exchangeRate !== null) { // Ensure exchange rate is fetched
        const result = (value * exchangeRate).toFixed(2)
        // toValue.value = result; // Display converted value
        printData(result);

    } else {
        console.warn("Exchange rate not available yet. Please select currencies first.");
    }
});

function printData(data) {
    document.getElementById('result').textContent = `${fromValue.value} ${fromCurr.toUpperCase()} equals to ${toCurr.toUpperCase()} ${data}`;
}

populateDropdown();