import React from 'react'
import { connect } from 'react-redux';

let root = document.documentElement;

class SideNavJSX extends React.Component {
  state = {
    basketball: false,
    baseball: false,
    football: false,
    hockey: false,

    basketballTeams: ['Atlanta Hawks', 'Boston Celtics', 'Brooklyn Nets', 'Charlotte Hornets', 'Chicago Bulls', 'Cleveland Cavaliers', 'Dallas Mavericks', 'Denver Nuggets', 'Detroit Pistons', 'Golden State Warriors', 'Houston Rockets', 'Indiana Pacers', 'Los Angeles Clippers', 'Los Angeles Lakers', 'Memphis Grizzlies', 'Miami Heat', 'Milwaukee Bucks', 'Minnesota Timberwolves', 'New Orleans Pelicans', 'New York Knicks', 'Oklahoma City Thunder', 'Orlando Magic', 'Philadelphia 76ers', 'Phoenix Suns', 'Portland Trail Blazers', 'Sacramento Kings', 'San Antonio Spurs', 'Toronto Raptors', 'Utah Jazz', 'Washington Wizards'],
    baseballTeams: ['Arizona Diamondbacks', 'Atlanta Braves', 'Baltimore Orioles', 'Boston Red Sox', 'Chicago White Sox', 'Chicago Cubs', 'Cincinnati Reds', 'Cleveland Indians', 'Colorado Rockies', 'Detroit Tigers', 'Houston Astros', 'Kansas City Royals', 'Los Angeles Angels', 'Los Angeles Dodgers', 'Miami Marlins', 'Milwaukee Brewers', 'Minnesota Twins', 'New York Yankees', 'New York Mets', 'Oakland Athletics', 'Philadelphia Phillies', 'Pittsburgh Pirates', 'San Diego Padres', 'San Francisco Giants', 'Seattle Mariners', 'St. Louis Cardinals', 'Tampa Bay Rays', 'Texas Rangers', 'Toronto Blue Jays', 'Washington Nationals'],
    footballTeams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
    hockeyTeams: ['Anaheim Ducks', 'Arizona Coyotes', 'Boston Bruins', 'Buffalo Sabres', 'Calgary Flames', 'Carolina Hurricanes', 'Chicago BlackHawks', 'Colorado Avalanche', 'Columbus Blue Jackets', 'Dallas Stars', 'Detroit Red Wings', 'Edmonton Oilers', 'Florida Panthers', 'Los Angeles Kings', 'Minnesota Wild', 'Montreal Canadiens', 'Nashville Predators', 'New Jersey Devils', 'New York Islanders', 'New York Rangers', 'Ottawa Senators', 'Philadelphia Flyers', 'Pittsburgh Penguins', 'St. Louis Blues', 'San Jose Sharks', 'Tampa Bay Lightning', 'Toronto Maple Leafs', 'Vancouver Canucks', 'Vegas Golden Knights', 'Washington Capitals', 'Winnipeg Jets']
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
                {this.state.basketballTeams.map((team, index) => {
                  return (
                    <option value={team} key={index}>{team}</option>
                  )
                })} 
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
                {this.state.baseballTeams.map((team, index) => {
                  return (
                    <option value={team} key={index}>{team}</option>
                  )
                })} 
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
                {this.state.footballTeams.map((team, index) => {
                  return (
                    <option value={team} key={index}>{team}</option>
                  )
                })} 
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
                {this.state.hockeyTeams.map((team, index) => {
                  return (
                    <option value={team} key={index}>{team}</option>
                  )
                })} 
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


