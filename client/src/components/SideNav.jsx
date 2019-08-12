import React from 'react'
import { connect } from 'react-redux';

import Dropdown from './Dropdown.jsx';

let root = document.documentElement;

class SideNavJSX extends React.Component {
  state = {
    selectedTeam: '',

    basketball: false,
    baseball: false,
    football: false,
    hockey: false,
  }

  basketballData = {
    teams: ['Atlanta Hawks', 'Boston Celtics', 'Brooklyn Nets', 'Charlotte Hornets', 'Chicago Bulls', 'Cleveland Cavaliers', 'Dallas Mavericks', 'Denver Nuggets', 'Detroit Pistons', 'Golden State Warriors', 'Houston Rockets', 'Indiana Pacers', 'Los Angeles Clippers', 'Los Angeles Lakers', 'Memphis Grizzlies', 'Miami Heat', 'Milwaukee Bucks', 'Minnesota Timberwolves', 'New Orleans Pelicans', 'New York Knicks', 'Oklahoma City Thunder', 'Orlando Magic', 'Philadelphia 76ers', 'Phoenix Suns', 'Portland Trail Blazers', 'Sacramento Kings', 'San Antonio Spurs', 'Toronto Raptors', 'Utah Jazz', 'Washington Wizards'],
    sport: 'basketball'
  }

  baseballData = {
    teams: ['Arizona Diamondbacks', 'Atlanta Braves', 'Baltimore Orioles', 'Boston Red Sox', 'Chicago White Sox', 'Chicago Cubs', 'Cincinnati Reds', 'Cleveland Indians', 'Colorado Rockies', 'Detroit Tigers', 'Houston Astros', 'Kansas City Royals', 'Los Angeles Angels', 'Los Angeles Dodgers', 'Miami Marlins', 'Milwaukee Brewers', 'Minnesota Twins', 'New York Yankees', 'New York Mets', 'Oakland Athletics', 'Philadelphia Phillies', 'Pittsburgh Pirates', 'San Diego Padres', 'San Francisco Giants', 'Seattle Mariners', 'St. Louis Cardinals', 'Tampa Bay Rays', 'Texas Rangers', 'Toronto Blue Jays', 'Washington Nationals'],
    sport: 'baseball'
  }

  footballData = {
    teams: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Diego Chargers', 'San Francisco 49ers', 'Seattle Seahawks', 'St. Louis Rams', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'],
    sport: 'football'
  }

  hockeyData = {
    teams: ['Anaheim Ducks', 'Arizona Coyotes', 'Boston Bruins', 'Buffalo Sabres', 'Calgary Flames', 'Carolina Hurricanes', 'Chicago BlackHawks', 'Colorado Avalanche', 'Columbus Blue Jackets', 'Dallas Stars', 'Detroit Red Wings', 'Edmonton Oilers', 'Florida Panthers', 'Los Angeles Kings', 'Minnesota Wild', 'Montreal Canadiens', 'Nashville Predators', 'New Jersey Devils', 'New York Islanders', 'New York Rangers', 'Ottawa Senators', 'Philadelphia Flyers', 'Pittsburgh Penguins', 'St. Louis Blues', 'San Jose Sharks', 'Tampa Bay Lightning', 'Toronto Maple Leafs', 'Vancouver Canucks', 'Vegas Golden Knights', 'Washington Capitals', 'Winnipeg Jets'],
    sport: 'hockey'
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

          <Dropdown teamData={this.basketballData}/>

          <li className="side-nav__item" onClick={() => this.clickSport('baseball')}>
            <div className="side-nav__link">
              <div className="side-nav__icon">
                <i className="fas fa-baseball-ball"></i>
              </div>
              <span>Baseball</span>
            </div>
          </li>

          <Dropdown teamData={this.baseballData}/>

          <li className="side-nav__item" onClick={() => this.clickSport('football')}>
            <div className="side-nav__link">
              <div className="side-nav__icon">
                <i className="fas fa-football-ball"></i>
              </div>
              <span>Football</span>
            </div>
          </li>

          <Dropdown teamData={this.footballData}/>

          <li className="side-nav__item" onClick={() => this.clickSport('hockey')}>
            <div className="side-nav__link">
              <div className="side-nav__icon">
                <i className="fas fa-hockey-puck"></i>
              </div>
              <span>Hockey</span>
            </div>
          </li>

          <Dropdown teamData={this.hockeyData}/>

          <div className="other-sports">* For other sports, use search bar</div>
        </ul>

        <div className="legal">
					&copy; 2019 by Team Stats. All rights reserved.
				</div>
      </nav>
    )
  }
}

const SideNav = connect(null)(SideNavJSX)

export default SideNav

