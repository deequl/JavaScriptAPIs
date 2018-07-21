var btn = document.querySelector("#btn");
var imgDog = document.querySelector("#imgDog")
requestDog()

btn.addEventListener("click", function(){
    requestDog();
})

function requestDog(){
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200) {
            var data = JSON.parse(XHR.responseText);
            imgDog.src = data.message;
        }
    }

    XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
    XHR.send();
}