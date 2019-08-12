import React from 'react'
import { connect } from 'react-redux'

class PlayersJSX extends React.Component {
  state = {
    age: 0,
    height: '0'
  }

  componentDidMount() {
    this.dateDiffInYears();
    this.changeHeight();
  }

  dateDiffInYears = () => {
    let newDate = new Date();
    newDate = newDate.getFullYear();

    let playerYear = this.props.player.dateBorn
    playerYear = playerYear.split('-')

    let age = newDate - playerYear[0]

    this.setState({
      age: age
    })
  }

  changeHeight = () => {
    let height = this.props.player.strHeight

    height = height.split(' (')

    let newHeight = height[0]

    this.setState({
      height: newHeight
    })
  }

  render () {
    return (
      <div className='player-card' style={{order: this.props.player.strPosition === 'Manager' ? 1 : 0}}>
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
                <li>{this.state.age} years old</li>
                {this.props.player.strWeight.length > 0 ? (<li>Weight: {this.props.player.strWeight}</li>) : (<li>Weight: Unknown</li>)}
                <li>Height: {this.state.height}</li>
                <li>Country: {this.props.player.strNationality}</li>
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
