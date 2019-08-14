import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import firebase from './firebase.js'

import { addTeam, addPlayers, addFavorite } from '../redux-state/actions/index'

function mapDispatchToProps (dispatch) {
  return {
    addTeam: team => dispatch(addTeam(team)),
    addPlayers: players => dispatch(addPlayers(players)),
    addFavorite: team => dispatch(addFavorite(team))
  }
}

const mapStateToProps = state => {
  return {
    favorites: state.favorites
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
          this.props.addFavorite(response.data.favorites)
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

  checkFavorites = () => {
    console.log(this.props.favorites)
  }

  render () {
    return (
      <div className="header" id='header'>
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

        <div className="user-nav">
          {firebase.auth().currentUser && 
            <a href='#favorites' className="user-nav__icon">
            <i className="fas fa-star" onClick={this.checkFavorites}></i>
            {this.props.favorites.length > 0 && 
              <span className="user-nav__notification">{this.props.favorites.length}</span>
            }
          </a>
          }
          <div className="user-nav__user" onClick={this.loginWithGoogle}>
            <img src={this.state.user.photoURL} alt="User Image" className="user-nav__user-photo"/>
            <span className="user-nav__user-name">{this.state.user.displayName}</span>
          </div>
        </div>
      </div>
    )
  }
}

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderJSX)

export default Header