const initialState = {
  counter: 0
}

export default (state = initialState, actions) => {
  switch (actions.type) {
    case 'INC':
      return {...state, counter: state.counter + 1}
    default:
      return state
  }
}
