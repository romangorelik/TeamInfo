import React from 'react'
import { connect } from 'react-redux'
import Players from './Players.jsx'
import firebase from './firebase.js'
import axios from 'axios'
import { addFavorite } from '../redux-state/actions/index'

function mapDispatchToProps (dispatch) {
  return {
    addFavorite: team => dispatch(addFavorite(team))
  }
}

const mapStateToProps = state => {
  return {
    teamInfo: state.teamInfo,
    teamPlayers: state.teamPlayers,
    favorites: state.favorites
  }
}

class TeamViewJSX extends React.Component {
  addFavorite = (team) => {
    let currentUser = firebase.auth().currentUser

    if(currentUser) {
      axios.patch('/users', {
        email: currentUser.email,
        favorite: team
      })

      if (!this.props.favorites.includes(team)) {
        this.props.addFavorite(team)
      }
    }

  }

  render () {
    return (
      <main className='team-view'>
        <div className="stadium">
          <img src={this.props.teamInfo.strStadiumThumb} alt='Stadium' className='stadium__image' />
          {this.props.teamInfo.strTeamBadge.length > 0 && 
            <img src={this.props.teamInfo.strTeamBadge} alt="Logo" className="stadium__logo"/>
          }
        </div>
        
        {this.props.teamPlayers.length === 0 &&
          <div className="welcome-info">
            <h1>Welcome to Team Search</h1>
            <p>Feel free to search for any team that we have available. Use our dropdowns for the 4 most popular leagues in the USA, or use our search bar for any teams that you may want some information about. Login in to register and view your favorites.</p>
          </div>
        }

        {this.props.teamPlayers.length > 0 && 
          <div className="team-information">
            <h2 className="team-information__name">{this.props.teamInfo.strTeam}</h2>
            <i className="fas fa-heart team-information__favorite" onClick={() => this.addFavorite(this.props.teamInfo.strTeam)}></i>
          </div>
        }

        <div className="players-container">
          {this.props.teamPlayers.length > 0 && 
            <React.Fragment>
              {this.props.teamPlayers.map((player, index) => {
                return (
                  <Players key={index} player={player}/>
                )
              })}
            </React.Fragment>
          }
        </div>
      </main>
    )
  }
}

const TeamView = connect(mapStateToProps, mapDispatchToProps)(TeamViewJSX)

export default TeamView