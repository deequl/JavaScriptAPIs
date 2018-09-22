import React, {Component} from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import * as apiCalls from './api';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
    }

    componentWillMount(){
        this.loadTodos();
    }

    async loadTodos(){
        let todos = await apiCalls.getTodos()
        //We don't need this because async
        //.then(todos => this.setState({todos}));
        this.setState({todos});
    }

    async addTodo(val){
        //console.log("Adding todo from todolist component: ", val);
        let newTodo = await apiCalls.createTodo(val);
        this.setState({todos: [...this.state.todos, newTodo]})
    }

    async deleteTodo(id){
        //We are not returning nothing on apiCalls.removeTodo(id)
        await apiCalls.removeTodo(id);
        const todosWhithoutDeletedElement = this.state.todos.filter(todo => todo._id !== id)
        this.setState({todos: todosWhithoutDeletedElement})
    }

    toogleTodo(todo){
        //console.log(todo._id, todo.completed);
        let updatedTodo = await eapiCalls.updateTodo(todo);
        const todosWithTodoToggle = this.state.todos.map(t =>
        (t._id === updatedTodo._id)
        ? {...t, completed: !t.completed} 
        : t
        )
        this.setState({todos: todosWithTodoToggle})
    }
    render(){
        const todos = this.state.todos.map((t) => (
            <TodoItem
                key={t._id}
                {...t}
                onDelete={this.deleteTodo.bind(this, t._id)}
                onToggle={this.toogleTodo.bind(this, t)}
            />
        ));
        return(
            <div>
                <h1>Todo List</h1>
                <TodoForm addTodo={this.addTodo}/>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList;