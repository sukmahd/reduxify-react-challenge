import  React from 'react'
import {deleteTask} from '../actions'
import { connect } from 'react-redux'

function ListTask(props){
    return (
      <div className="card-columns">
        {
          props.kerjaan.map(function(tas, i){
            return (
              <div className="card" key={i}>
                <div className="card-body">
                  <h4 className="card-title">{tas}</h4>
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary" onClick={() => props.deleteTask(i)}>Delete</button>
                </div>
              </div>
            )
          })
        }
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    kerjaan: state.todoStore.task
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (index) => dispatch(deleteTask(index))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListTask)
