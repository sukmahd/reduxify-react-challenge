import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './stores'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Heroes from './components/Heroes'
import Button from './components/Button'
import Hero from './components/Hero'
import './App.css';

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Router>
      <div className="App container">
      <Header/>
      <div className="form-group">
        <Button/>
      </div>
      <Route exact path="/" component={Heroes}/>
      <Route path="/hero/:id" component={Hero}/>
      </div>
    </Router>
    </Provider>
    );
  }
}

export default App;
