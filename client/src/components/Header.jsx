import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import firebase from './firebase.js'

import { addTeam, addPlayers } from '../redux-state/actions/index'

function mapDispatchToProps (dispatch) {
  return {
    addTeam: team => dispatch(addTeam(team)),
    addPlayers: players => dispatch(addPlayers(players))
  }
}

class HeaderJSX extends React.Component {
  state = {
    searchedTeam: '',
    user: {
      photoURL: 'https://react.semantic-ui.com/images/avatar/large/patrick.png',
      displayName: 'Login'
    },
    favorites: [],
    registered: false
  }

  componentDidMount = () => {
    firebase.auth().signOut()
  }

  searchTeam = (e) => {
    e.preventDefault();

    axios.get('/teamInfo', {
      params: {
        team: this.state.searchedTeam
      }
    })
    .then(response => {
      this.props.addTeam(response.data)
    })
    .catch(err => console.error(err))

    axios.get('/teamPlayers', {
      params: {
        team: this.state.searchedTeam
      }
    })
    .then(response => {
      this.props.addPlayers(response.data)
    })
    .catch(err => console.error(err))

    this.setState({
      searchedTeam: ''
    })
  }

  specifyTeam = (e) => {
    this.setState({
      searchedTeam: e.target.value
    })
  }

  loginWithGoogle = () => {
    if (firebase.auth().currentUser === null) {

      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then(results => {

          this.pullUserData(results.user.email)

          this.setState({
            user: results.user
          })
        })
        .catch(error => console.error(error))

    }
  }

  pullUserData = (email) => {
    axios.get('/users', {
      params: {
        email: email
      }
    })
      .then(response => {
        if (response.data) {
          this.setState({
            favorites: response.data.favorites,
            registered: true
          })
        } else {
          this.registerUserData(email)
        }
      })
      .catch(err => console.error(err))
  }

  registerUserData = (email) => {
    axios.post('/users', {
      email: email
    })
      .then(response => console.log('registered'))
      .catch(err => console.error(err))
  }

  render () {
    return (
      <div className="header">
        <div className="header__icon">
          <i className="fas fa-trophy"></i>
        </div>

        <form action="#" className="search" onSubmit={this.searchTeam}>
          <input type="text" className="search__input" placeholder='Search teams' value={this.state.searchedTeam} onChange={this.specifyTeam}/>
          <button className="search__button">
            <div className="search__icon">
              <i className="fas fa-search"></i>
            </div>
          </button>
        </form>

        <div className="user-nav" onClick={this.loginWithGoogle}>
          <div className="user-nav__icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="user-nav__user">
            <img src={this.state.user.photoURL} alt="User Image" className="user-nav__user-photo"/>
            <span className="user-nav__user-name">{this.state.user.displayName}</span>
          </div>
        </div>
      </div>
    )
  }
}

const Header = connect(null, mapDispatchToProps)(HeaderJSX)

export default Header