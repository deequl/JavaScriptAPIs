$("#btn").click(function(){
    $.ajax({
        method: "GET",
        url: "https://baconipsum.com/api/?type=meat-and-filler"
    })
    .done(addP)
    .fail(function(){
        alert("Something went wrong!")
    })
});

function addP (data){
    $("p").text(data[0])
}

$("#getB").click(function(){
    $.get("https://api.github.com/users/deequl")
    .done(function(data){
        console.log(data)
    })
    .fail(function(){
        console.log("ERROR!")
    })
})

$("#postB").click(function(){
    var data = {name:"David", city:"Florence"};
    $.post("www.catsarecoolandsoaredogs.com", data)
    .done(function(data){
        console.log(data)
    })
    .fail(function(){
        console.log("ERROR!")        
    })
})

$("#getJSONB").click(function(){
    $.getJSON("https://api.github.com/users/deequl")
    .done(function(data){

    })
    .fail(function(){
        console.log("ERROR!")
    })
})