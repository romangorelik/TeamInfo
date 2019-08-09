import React from 'react'
import { connect } from 'react-redux';

let root = document.documentElement;

class SideNavJSX extends React.Component {
  state = {
    basketball: false,
    baseball: false,
    football: false,
    hockey: false
  }

  clickSport = (sport) => {
    this.setState({
      [`${sport}`]: !this.state[`${sport}`]
    }, () => {
      if (this.state[`${sport}`]) {
        root.style.setProperty(`--dropdown-display-${sport}`, 'block');
      } else {
        root.style.setProperty(`--dropdown-display-${sport}`, 'none');
      }
    })
  }

  render () {
    return (
      <nav className="sidebar">
        <ul className="side-nav">
          <li className="side-nav__item" onClick={() => this.clickSport('basketball')}>
            <div className="side-nav__link">
              <div className="side-nav__icon">
                <i className="fas fa-basketball-ball"></i>
              </div>
              <span>Basketball</span>
            </div>
          </li>

          <li className="side-nav__dropdown side-nav__dropdown--basketball">
            <form className="side-nav__dropdown-form">
              <select name='basketball-teams'>
                <option value='Atlanta Hawks'>Atlanta Hawks</option>
                <option value='Boston Celtics'>Boston Celtics</option>
                <option value='Brooklyn Nets'>Brooklyn Nets</option>
                <option value='Charlotte Hornets'>Charlotte Hornets</option>
                <option value='Chicago Bulls'>Chicago Bulls</option>
                <option value='Cleveland Cavaliers'>Cleveland Cavaliers</option>
                <option value='Dallas Mavericks'>Dallas Mavericks</option>
                <option value='Denver Nuggets'>Denver Nuggets</option>
                <option value='Detroit Pistons'>Detroit Pistons</option>
                <option value='Golden State Warriors'>Golden State Warriors</option>
                <option value='Houston Rockets'>Houston Rockets</option>
                <option value='Indiana Pacers'>Indiana Pacers</option>
                <option value='Los Angeles Clippers'>Los Angeles Clippers</option>
                <option value='Los Angeles Angeles'>Los Angeles Angeles</option>
                <option value='Memphis Grizzlies'>Memphis Grizzlies</option>
                <option value='Miami Heat'>Miami Heat</option>
                <option value='Milwaukee Bucks'>Milwaukee Bucks</option>
                <option value='Minnesota Timberwolves'>Minnesota Timberwolves</option>
                <option value='New Orleans Pelicans'>New Orleans Pelicans</option>
                <option value='New York Knicks'>New York Knicks</option>
                <option value='Oklahoma City Thunder'>Oklahoma City Thunder</option>
                <option value='Orlando Magic'>Orlando Magic</option>
                <option value='Philadelphia 76ers'>Philadelphia 76ers</option>
                <option value='Phoenix Suns'>Phoenix Suns</option>
                <option value='Portland Trail Blazers'>Portland Trail Blazers</option>
                <option value='Sacramento Kings'>Sacramento Kings</option>
                <option value='San Antonio Spurs'>San Antonio Spurs</option>
                <option value='Toronto Raptors'>Toronto Raptors</option>
                <option value='Utah Jazz'>Utah Jazz</option>
                <option value='Washington Wizards'>Washington Wizards</option>
              </select>
              <button className="btn btn--dropdown">Search</button>
            </form>
          </li>

          <li className="side-nav__item" onClick={() => this.clickSport('baseball')}>
            <div className="side-nav__link">
              <div className="side-nav__icon">
                <i className="fas fa-baseball-ball"></i>
              </div>
              <span>Baseball</span>
            </div>
          </li>

          <li className="side-nav__dropdown side-nav__dropdown--baseball">
            <form className="side-nav__dropdown-form">
              <select name='baseball-teams'>
                <option value='New_York_Knicks'>New York Yankees</option>
                <option value='Los_Angeles_Lakers'>Los Angeles Dodgers</option>
              </select>
              <button className="btn btn--dropdown">Search</button>
            </form>
          </li>

          <li className="side-nav__item" onClick={() => this.clickSport('football')}>
            <div className="side-nav__link">
              <div className="side-nav__icon">
                <i className="fas fa-football-ball"></i>
              </div>
              <span>Football</span>
            </div>
          </li>

          <li className="side-nav__dropdown side-nav__dropdown--football">
            <form className="side-nav__dropdown-form">
              <select name='football-teams'>
                <option value='New_York_Knicks'>New York Jets</option>
                <option value='Los_Angeles_Lakers'>Los Angeles Rams</option>
              </select>
              <button className="btn btn--dropdown">Search</button>
            </form>
          </li>

          <li className="side-nav__item" onClick={() => this.clickSport('hockey')}>
            <div className="side-nav__link">
              <div className="side-nav__icon">
                <i className="fas fa-hockey-puck"></i>
              </div>
              <span>Hockey</span>
            </div>
          </li>

          <li className="side-nav__dropdown side-nav__dropdown--hockey">
            <form className="side-nav__dropdown-form">
              <select name='hockey-teams'>
                <option value='New_York_Knicks'>New York Islanders</option>
                <option value='Los_Angeles_Lakers'>Los Angeles Kings</option>
              </select>
              <button className="btn btn--dropdown">Search</button>
            </form>
          </li>
        </ul>

        <div className="legal">
					&copy; 2017 by Team Stats. All rights reserved.
				</div>
      </nav>
    )
  }
}

const SideNav = connect(null)(SideNavJSX)

export default SideNav





