import React from 'react'
import { connect } from 'react-redux'
import { show_list_hero } from '../actions'

function Button (props) {
  // console.log(props.data);
  return (
    <button className="btn btn-primary" onClick={props.show}>Show List</button>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    show: () => dispatch(show_list_hero())
  }
}

export default connect(null, mapDispatchToProps)(Button)
