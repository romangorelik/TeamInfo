import React from 'react'
import { connect } from 'react-redux'

import axios from 'axios'

class DropdownJSX extends React.Component {
  state = {
    selectedTeam: ''
  }

  chooseTeam = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    this.setState({
      selectedTeam: e.target.value
    })
  }

  render () {
    return (
      <li className={`side-nav__dropdown side-nav__dropdown--${this.props.teamData.sport}`}>
        <form className="side-nav__dropdown-form">
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

const Dropdown = connect(null)(DropdownJSX)

export default Dropdown