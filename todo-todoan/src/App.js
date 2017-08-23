import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './stores'
import ListTask from './components/ListTask'
import AddTodo from './components/AddTodo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: store.getState().count
    }
  }

  render() {
    store.subscribe(() => {
      this.setState(store.getState())
    })

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React Todo Use Redux</h2>
        </div>
        <hr/>
        <div className='container'>
          <ListTask/>
          <AddTodo/>
      </div>
      </div>
    );
  }
}

export default App;
