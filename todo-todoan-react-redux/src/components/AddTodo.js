import React, { Component } from 'react'
import { add } from '../actions'
import { connect } from 'react-redux'


class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  addTask() {
    this.props.addTask(this.state.value)
    this.setState({
      value: ''
    })
  }

  render () {
    return (
      <div className="row justify-content-md-center">
        <form className="form-inline">
          <div class="form-group mx-sm-3">
            <input type="text" class="form-control"  value={this.state.value} onChange={this.handleChange} placeholder="New Task"/>
          </div>
          <button className="btn btn-info btn-sm" type="button" onClick={() => {this.addTask()}}>Tambah Task</button>
      </form>
    </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (value) => dispatch(add(value))
  }
}


export default connect(null, mapDispatchToProps)(AddTodo)
