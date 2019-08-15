import React from 'react'
import { connect } from 'react-redux'
import firebase from './firebase.js'

import axios from 'axios'

import { addTeam, addPlayers, deleteFavorite } from '../redux-state/actions/index'

function mapDispatchToProps (dispatch) {
  return {
    addTeam: team => dispatch(addTeam(team)),
    addPlayers: players => dispatch(addPlayers(players)),
    deleteFavorite: team => dispatch(deleteFavorite(team))
  }
}

const mapStateToProps = state => {
  return {
    favorites: state.favorites
  }
}

class PopupJSX extends React.Component {

  searchFavorite = (team) => {
    axios.get('/teamInfo', {
      params: {
        team: team
      }
    })
    .then(response => {
      this.props.addTeam(response.data)
    })
    .catch(err => console.error(err))

    axios.get('/teamPlayers', {
      params: {
        team: team
      }
    })
    .then(response => {
      this.props.addPlayers(response.data)
    })
    .catch(err => console.error(err))
  }

  removeFavorite = (team) => {
    let currentUser = firebase.auth().currentUser

    axios.put('/users', {
      email: currentUser.email,
      favorite: team
    })

    this.props.deleteFavorite(team)
  }

  render () {
    return (
      <div className='popup' id='favorites'>
        <div className="popup__content">
          <ul className="popup__list">
            {this.props.favorites.map((team, index) => {
              return (
                <React.Fragment key={index}>
                  <li className='popup__list-item'>
                    <i className="fas fa-heart-broken popup__unfavorite" onClick={() => this.removeFavorite(team)}/>
                    <a href='#header' className='popup__item' onClick={() => this.searchFavorite(team)}>{team}</a>
                  </li>
                </React.Fragment>
                
              )
            })}
          </ul>
          <a href="#header" className="popup__close">&times;</a>
        </div>
      </div>
    )
  }
}

const Popup = connect(mapStateToProps, mapDispatchToProps)(PopupJSX)

export default Popup