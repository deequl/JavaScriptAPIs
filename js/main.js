document.getElementById('mainInput').addEventListener('input', function(e){
    let dollars = e.target.value;
    (dollars > 100)? status='warning' : status='primary'
    document.getElementById('dollarsOutput').innerHTML=
    '<div class="card bg-' + status + ' mb-3">' +
                    '<div class="card-header">$</div>' +
                    '<div class="card-body">' +
                        '<h1>' + dollars / 0.1531; + '</h1>' +
                    '</div>' +
                '</div>'
})

function CreateTableFromJSON(){

    var myList = [
        { "name": "abc", "hobby": 50 },
        { "name": "25", "hobby": "swimming" },
        { "name": "xyz", "hobby": "programming" }
      ];
    
    var html;

    html += '<table class="table table-striped"> <thead> <tr>'

    for(var i = 0; i<Object.keys(myList[0]).length; i++){
        html += '<th scope="col">'+ Object.keys(myList[0])[i] +'</th>'
    }

    html += '</tr>'+ '</thead>' + '<tbody>'

    
    for(var i = 0; i<Object.keys(myList).length; i++){
        html += '<tr>'
        for(var j = 0; j<Object.keys(myList[i]).length; j++){
            html += '<td>'+ Object.keys(myList[i][j]) +'</td>'
        }
        html += '</tr>'
    }
    //html += '<tr>' + '<td>Mark</td>' + '<td>MLdsa</td>' +'</tr>'
    html += '</tbody> </table>'

    document.getElementById('tableOutput').innerHTML= html
    
}