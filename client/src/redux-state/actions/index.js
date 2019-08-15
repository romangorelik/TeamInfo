export function addTeam(payload) {
  return {type: 'ADD_TEAM', payload}
}

export function addPlayers(payload) {
  return {type: 'ADD_PLAYERS', payload}
}

export function addFavorite(payload) {
  return {type: 'ADD_FAVORITE', payload}
}

export function deleteFavorite(payload) {
  return {type: 'DELETE_FAVORITE', payload}
}