import React from 'react'
import { connect } from 'react-redux'
import Players from './Players.jsx';

const mapStateToProps = state => {
  return {
    teamStadiumImage: state.teamInfo.strStadiumThumb,
    teamLogo: state.teamInfo.strTeamBadge,
    teamInfo: state.teamInfo,
    teamPlayers: state.teamPlayers
  }
}

class TeamViewJSX extends React.Component {
  render () {
    return (
      <main className='team-view'>
        <div className="stadium">
          <img src={this.props.teamStadiumImage} alt='Stadium' className='stadium__image' />
          {this.props.teamLogo.length > 0 && 
            <img src={this.props.teamLogo} alt="Logo" className="stadium__logo"/>
          }
        </div>

        {this.props.teamPlayers.length > 0 && 
          <div className="team-information">
            <h2 className="team-information__name">{this.props.teamInfo.strTeam}</h2>
            <i className="fas fa-heart team-information__favorite"></i>
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

const TeamView = connect(mapStateToProps)(TeamViewJSX)

export default TeamView