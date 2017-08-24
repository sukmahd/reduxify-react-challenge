import axios from 'axios'

export const list_hero = (_heroes) => (
  {
    type: "LIST_HERO",
    payload: {
      heroes: _heroes
    }
  }
)

export const show_list_hero = () => {
  return (dispatch, getState) => {

    axios.get('https://api.opendota.com/api/heroStats')
    .then(resp => {
      dispatch(list_hero(resp.data))

    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const loader = {
  type: "SHOW",
  payload: {
    text: 'loading'
  }
}

export const close_loader = {
  type: "CLOSE"
}
