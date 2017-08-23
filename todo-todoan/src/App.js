import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './stores'
import {  add, deleteTask } from './actions'

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: store.getState().count,
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
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
            <div className="card-columns">
              {
                store.getState().task.map(function(tas, i){
                  return (
                    <div className="card" key={i}>
                      <div className="card-body">
                        <h4 className="card-title">{tas}</h4>
                      </div>
                      <div className="card-footer">
                          <button className="btn btn-primary" onClick={() => store.dispatch(deleteTask(i))}>Delete</button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
        </div>
        <div className="row justify-content-md-center">
          <form className="form-inline">
            <div class="form-group mx-sm-3">
              <input type="text" class="form-control"  value={this.state.value} onChange={this.handleChange} placeholder="New Task"/>
          </div>
          <button className="btn btn-info btn-sm" type="button" onClick={() => store.dispatch(add(this.state.value))}>Tambah Task</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
