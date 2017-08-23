import React from 'react'
import { increment } from '../actions'
import { connect } from 'react-redux'

function Counter (props) {
  return (
    <div>
      <p>{props.count}</p>
    <button onClick={props.tambah}>Tambah Count</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.counterStore.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tambah: () => dispatch(increment)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)
