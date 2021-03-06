import React, { Component } from 'react';
import { Provider } from 'react-redux'

import logo from './logo.svg';
import './App.css';

import store from './stores'
import ListTask from './components/ListTask'
import AddTodo from './components/AddTodo'
import Counter from './components/Counter'

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: store.getState().counter
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Todo Use Redux</h2>
          </div>
          <Counter/>
          <hr/>
          <div className='container'>
            <ListTask/>
            <AddTodo/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
