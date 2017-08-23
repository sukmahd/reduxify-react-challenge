export const add = (task) => {
  return {
    type: 'ADD_TASK',
    payload: {
      task: task
    }
  }
}

export const deleteTask = (index) => {
  return {
    type: 'DELETE_TASK',
    payload: {
      index: index
    }
  }
}

export const increment = {
  type: 'INC'
}
