import React from 'react'
import { connect } from 'react-redux'

class PlayersJSX extends React.Component {
  render () {
    return (
      <div className='player-card'>
        <div className="player-card__side player-card__side--front">
          <div className="player-card__picture">
            {this.props.player.strThumb ? (
              <img src={this.props.player.strThumb} alt={this.props.player.strPlayer} className="player-card__picture-photo"/>
            ) : (
              <img src='https://www.sccpre.cat/png/big/95/952092_shadow-person-png.png' alt={this.props.player.strPlayer} className="player-card__picture-photo"/>
            )}
          </div>
          <h4 className="player-card__name"> {this.props.player.strPlayer} </h4>
          <h4 className="player-card__position"> {this.props.player.strPosition} </h4>
        </div>

        <div className="player-card__side player-card__side--back">
          <div className="player-card__cta">
            <div className="player-card__details">
              <ul>
                <li>Age</li>
                <li>Weight</li>
                <li>Height</li>
                <li>Country</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const Players = connect(null)(PlayersJSX)

export default Players
