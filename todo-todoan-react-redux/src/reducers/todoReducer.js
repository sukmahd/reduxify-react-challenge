const initialState = {
  task: ['jalan', 'kaki', 'makan'],
  count: 0
}

export default (state=initialState, actions) => {
  switch (actions.type) {
    case 'ADD_TASK':
      const newTask = {...state, task: state.task.concat(actions.payload.task)}
      console.log(newTask);
      return newTask
    case 'INC':
      const newCount = {...state, count: state.count + 1}
      return newCount
    case 'DELETE_TASK':
      const newData = {...state, task: state.task.filter((item, index) => {
        return index !== actions.payload.index
      })}
      return newData
    default:
      return state
  }
}
