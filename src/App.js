// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import todos from './data/todo.json';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import Filter from './components/Filter';
import Info from './components/Info';
import { AppContainer } from './styles';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    todos,
    filter: '',
  };

  addTodo = text => {
    const newTodo = {
      id: nanoid(),
      text,
      completed: false,
    };

    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));
  };

  toggleCompleted = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredTodos = () => {
    const { todos, filter } = this.state;
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
  };

  countCompleted = () => {
    return this.state.todos.filter(todo => todo.completed).length;
  };

  render() {
    const { filter, todos } = this.state;
    const visibleTodos = this.getFilteredTodos();
    const completedCount = this.countCompleted();

    return (
      <AppContainer>
        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />
        <Info total={todos.length} completed={completedCount} />
        <TodoList
          todos={visibleTodos}
          onDelete={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </AppContainer>
    );
  }
}

export default App;
