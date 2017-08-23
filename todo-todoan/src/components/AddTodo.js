import React, { Component } from 'react'
import store from '../stores'
import { add } from '../actions'

class AddTodo extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  render () {
    return (
      <div className="row justify-content-md-center">
        <form className="form-inline">
          <div class="form-group mx-sm-3">
            <input type="text" class="form-control"  value={this.state.value} onChange={this.handleChange} placeholder="New Task"/>
          </div>
          <button className="btn btn-info btn-sm" type="button" onClick={() => store.dispatch(add(this.state.value))}>Tambah Task</button>
      </form>
    </div>
    )
  }
}

export default AddTodo
