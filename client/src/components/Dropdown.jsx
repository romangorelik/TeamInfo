import React from 'react'
import { connect } from 'react-redux'

import axios from 'axios'

import { addTeam, addPlayers } from '../redux-state/actions/index'

function mapDispatchToProps (dispatch) {
  return {
    addTeam: team => dispatch(addTeam(team)),
    addPlayers: players => dispatch(addPlayers(players))
  }
}

class DropdownJSX extends React.Component {
  state = {

  }

  chooseTeam = (e) => {
    e.preventDefault();

    axios.get('/teamInfo', {
      params: {
        team: e.target.value
      }
    })
    .then(response => {
      this.props.addTeam(response.data)
    })
    .catch(err => console.error(err))

    axios.get('/teamPlayers', {
      params: {
        team: e.target.value
      }
    })
    .then(response => {
      this.props.addPlayers(response.data)
    })
    .catch(err => console.error(err))
  }

  render () {
    return (
      <li className={`side-nav__dropdown side-nav__dropdown--${this.props.teamData.sport}`}>
        <form method='post' className="side-nav__dropdown-form">
          <select defaultValue='initial' name={`${this.props.teamData.sport}-teams`} className='side-nav__dropdown-select' onChange={this.chooseTeam}>
            <option value='initial' disabled>Choose Team</option>
            {this.props.teamData.teams.map((team, index) => {
              return (
                <option value={team} key={index}>{team}</option>
              )
            })} 
          </select>
        </form>
      </li>
    )
  }
}

const Dropdown = connect(null, mapDispatchToProps)(DropdownJSX)

export default Dropdown