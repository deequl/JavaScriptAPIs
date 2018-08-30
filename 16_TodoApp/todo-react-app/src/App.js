import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { METHODS } from 'http';

const TodoItem = ({text}) => (
  <li>{text}</li>
);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      todoInput: '' //value of the input
    };
    // This line is required because if not the this.setState in handleSubmit method
    // won't refer to this state. 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.state.todoInput];
    this.setState({todos, todoInput: ''})
  }

  render() {
    const {todoInput} = this.state;
    const todos = this.state.todos.map((todoText, index) => (
      <TodoItem key={index} text={todoText} />
    ));
    return (
      <div className="App">
        <h1>Simple Todo app</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className="todo-input"
            autoComplete="off"
            type="text"
            name="todoInput"
            placeholder="What need to be done?"
            value={todoInput}
            onChange={(e) => this.setState({[e.target.name]: e.target.value})}
          />
          <button
            type="submit"
            className="save-button"
          > Save
          </button>
        </form>      
        <div className="todo-content">
          <ol>
            {todos}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
