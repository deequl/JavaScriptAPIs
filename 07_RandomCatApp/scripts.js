var btn = document.querySelector("#btn");
var imgCatDisplay = document.querySelector("#imgDog")
var url = "http://aws.random.cat/meow"

requestCat();

$("#btn").click(function(){
    requestCat();
})

function requestCat(){
    $.getJSON("http://aws.random.cat/meow")
    .done(function(data){
        console.log(data)
        $("#catImg").attr("src", data.file);
    })
    .fail(function(){
        alert("API Request is not working: http://aws.random.cat/meow")
    })
}