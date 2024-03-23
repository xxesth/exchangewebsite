const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");
console.log(firstSelect.value,secondSelect.value);
const currencyexmp = new Currency(firstSelect.value,secondSelect.value);
const ui = new UI(firstSelect,secondSelect);

eventListeners();

function eventListeners(){
    amountElement.addEventListener("input",exchangeCurrency);
    firstSelect.onchange = function(){
        currencyexmp.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeFirst();
    }
    secondSelect.onchange = function(){
        currencyexmp.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();
    }
}

function exchangeCurrency(){
    currencyexmp.changeAmount(amountElement.value);
    currencyexmp.exchange()
    .then(result => ui.displayResult(result))
    .catch(err => console.error(err));
}