$(document).ready(function(){
    $.getJSON("/api/todos")
    .then(addTodos)

    $('#todoInput').keypress(function(event){
        if(event.which == 13){
            createTodo();
        }
    });

    $('.list').on('click', 'span', function(event){
        //imp - event.stopPropagation
        event.stopPropagation();
        removeTodo($(this).parent())
    })

    $('.list').on('click', 'li', function(){
        updateTodo($(this));
    })
});


function addTodos(todos) {
    //add todos to the page
    todos.forEach(todo => {
        addTodo(todo)
    });
}

function addTodo(todo){
    //add a single todo <li>
    var newTodo = $('<li class="task">'+todo.name+' <span>X</span></li>')
    //another way to add an id to the <li>
    newTodo.data('id', todo._id)
    newTodo.data('completed', todo.completed)
    if(todo.completed){
        newTodo.addClass("done")
    }
    $('.list').append(newTodo)    
}

function createTodo(){
    //send request to create new todo
    var userInput = $('#todoInput').val()
    $.post('/api/todos',{name: userInput})
    .then(function(newTodo){
        addTodo(newTodo);
        $('#todoInput').val('');
    })
    .catch(function(err){
        console.log(err);
    })
}

function removeTodo(todo){
    var clickedId = todo.data('id')
    var deleteURL = '/api/todos/' +  clickedId
    $.ajax({
        method: 'DELETE',
        url: deleteURL
    })
    .then(function(data){
        todo.remove();
    })
}

function updateTodo(todo){
    //console.log(todo.data('completed'))
    var updateURL = '/api/todos/' +  todo.data('id');
    var isDone = !todo.data('completed');
    var updateData = {completed: isDone}
    $.ajax({
        method: 'PUT',
        url: updateURL,
        data: updateData
    })
    .then(function(updatedTodo){
        todo.toggleClass("done");
        todo.data('completed', isDone)
    })
}