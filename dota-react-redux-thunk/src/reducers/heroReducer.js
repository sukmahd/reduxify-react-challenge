const initialState = {
  heroes: []
}

export default (state = initialState, actions) => {
  switch (actions.type) {
    case 'LIST_HERO':
      return {...state, heroes: state.heroes.concat(actions.payload.heroes)}
    default:
      return state
  }
}
