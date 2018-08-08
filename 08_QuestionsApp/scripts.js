var url = 'https://opentdb.com/api.php?amount=1';

var questionDisplay= document.querySelector('#question')
var answersDisplay= document.querySelector('#answers')

//&quot;
axios.get(url)
.then(function(res){
    questionDisplay.innerText = res.data.results[0].question
    var html = '<div class="row mt-3">'
    for(var i = 0; i<res.data.results[0].incorrect_answers.length; i++){
        html += '<div class="col-sm">' +
                '<button type="button" class="btn btn-secondary" id="btn">' +
                res.data.results[0].incorrect_answers[i] +
                '</button></div>'
    }
    html += '<div class="col-sm">' +
            '<button type="button" class="btn btn-secondary" id="btn">' +
            res.data.results[0].correct_answer +
            '</button></div>'
    html += '</div>'
    answersDisplay.innerHTML = html;


})
.catch(function(){
    console.log("ERR")
})


