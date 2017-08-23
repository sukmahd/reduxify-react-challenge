import  React,{ Component } from 'react'
import store from '../stores'
import {deleteTask} from '../actions'

class ListTask extends Component {
  render(){
    return (
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
    )
  }
}

export default ListTask
