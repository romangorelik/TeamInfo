import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    teamStadiumImage: state.teamInfo.strStadiumThumb,
    teamLogo: state.teamInfo.strTeamBadge
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
      </main>
    )
  }
}

const TeamView = connect(mapStateToProps)(TeamViewJSX)

export default TeamView