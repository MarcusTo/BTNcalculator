const getBitcBtn = document.querySelector('.getBitc');
const amountList = document.querySelector('.amount');
const inputField= document.querySelector('input[type="number"]');
const currency = document.querySelector('.selectCurrency')

getBitcBtn.addEventListener('click', getBitc);

function getBitc(){
    let numberOfBitc = inputField.value;
    let currency = selectCurrency.value;
    let url = "https://api.coindesk.com/v1/bpi/currentprice.json";

    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        if (currency = "USD") {
            let USDBitc =data.bpi.USD.rate_float * numberOfBitc ;
            amountList.innerHTML = USDBitc.toFixed(2);
            	}
            else if (currency= "EUR") {
            let EURBitc =data.bpi.EUR.rate_float * numberOfBitc ;
            amountList.innerHTML = EURBitc.toFixed(2);
            } else {
            let GBPBitc =data.bpi.GBP.rate_float * numberOfBitc ;
            amountList.innerHTML = GBPBitc.toFixed(2);
        }

       


    });
}

