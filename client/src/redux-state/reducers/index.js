const initialState = {
  teamInfo: {
    strStadiumThumb: 'https://vignette.wikia.nocookie.net/phobia/images/a/ab/Sports2.jpg/revision/latest?cb=20171106083857',
    strTeamBadge: ''
  },
  teamPlayers: [],
  favorites: []
}

function rootReducer(state = initialState, action) {
  if (action.type === 'ADD_TEAM') {
    return Object.assign({}, state, {
      teamInfo: action.payload
    })
  }

  if (action.type === 'ADD_PLAYERS') {
    return Object.assign({}, state, {
      teamPlayers: action.payload
    })
  }

  if (action.type === 'ADD_FAVORITE') {
    return Object.assign({}, state, {
      favorites: state.favorites.concat(action.payload)
    })
  }

  if (action.type === 'DELETE_FAVORITE') {
    return Object.assign({}, state, {
      favorites: state.favorites.filter(team => team !== action.payload)
    })
  }
  
  return state
}

export default rootReducer