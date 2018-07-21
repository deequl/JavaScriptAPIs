var btn = document.querySelector("#btn");
var priceDisplay = document.querySelector("#price")
var display = document.querySelector("#display")

var currency = "EUR" //USD - GBP

window.onload = CurrentPrice();
setInterval(function(){ CurrentPrice() }, 3000);

function CurrentPrice(){
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200) {
            var data = JSON.parse(XHR.responseText);
            var price = data.bpi[currency].rate;
            priceDisplay.innerText = price + " " + currency;
        }
    }

    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
}