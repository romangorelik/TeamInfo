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
                <option value='Atlanta_Hawks'>Atlanta Hawks</option>
                <option value='Boston_Celtics'>Boston Celtics</option>
                <option value='Brooklyn_Nets'>Brooklyn Nets</option>
                <option value='Charlotte_Hornets'>Charlotte Hornets</option>
                <option value='Chicago_Bulls'>Chicago Bulls</option>
                <option value='Cleveland_Cavaliers'>Cleveland Cavaliers</option>
                <option value='Dallas_Mavericks'>Dallas Mavericks</option>
                <option value='Denver_Nuggets'>Denver Nuggets</option>
                <option value='Detroit_Pistons'>Detroit Pistons</option>
                <option value='Golden_State_Warriors'>Golden State Warriors</option>
                <option value='Houston_Rockets'>Houston Rockets</option>
                <option value='Indiana_Pacers'>Indiana Pacers</option>
                <option value='Los_Angeles_Clippers'>Los Angeles Clippers</option>
                <option value='Los_Angeles_Angeles'>Los Angeles Angeles</option>
                <option value='Memphis_Grizzlies'>Memphis Grizzlies</option>
                <option value='Miami_Heat'>Miami Heat</option>
                <option value='Milwaukee_Bucks'>Milwaukee Bucks</option>
                <option value='Minnesota_Timberwolves'>Minnesota Timberwolves</option>
                <option value='New_Orleans_Pelicans'>New Orleans Pelicans</option>
                <option value='New_York_Knicks'>New York Knicks</option>
                <option value='Oklahoma_City_Thunder'>Oklahoma City Thunder</option>
                <option value='Orlando_Magic'>Orlando Magic</option>
                <option value='Philadelphia_76ers'>Philadelphia 76ers</option>
                <option value='Phoenix_Suns'>Phoenix Suns</option>
                <option value='Portland_Trail_Blazers'>Portland Trail Blazers</option>
                <option value='Sacramento_Kings'>Sacramento Kings</option>
                <option value='San_Antonio_Spurs'>San Antonio Spurs</option>
                <option value='Toronto_Raptors'>Toronto Raptors</option>
                <option value='Utah_Jazz'>Utah Jazz</option>
                <option value='Washington_Wizards'>Washington Wizards</option>
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
                <option value='Arizona_Diamondbacks'>Arizona Diamondbacks</option>
                <option value='Atlanta_Braves'>Atlanta Braves</option>
                <option value='Baltimore_Orioles'>Baltimore Orioles</option>
                <option value='Boston_Red_Sox'>Boston Red Sox</option>
                <option value='Chicago_White_Sox'>Chicago White Sox</option>
                <option value='Chicago_Cubs'>Chicago Cubs</option>
                <option value='Cincinnati_Reds'>Cincinnati Reds</option>
                <option value='Cleveland_Indians'>Cleveland Indians</option>
                <option value='Colorado_Rockies'>Colorado Rockies</option>
                <option value='Detroit_Tigers'>Detroit Tigers</option>
                <option value='Houston_Astros'>Houston Astros</option>
                <option value='Kansas_City_Royals'>Kansas City Royals</option>
                <option value='Los_Angeles_Angels'>Los Angeles Angels</option>
                <option value='Los_Angeles_Dodgers'>Los Angeles Dodgers</option>
                <option value='Miami_Marlins'>Miami Marlins</option>
                <option value='Milwaukee_Brewers'>Milwaukee Brewers</option>
                <option value='Minnesota_Twins'>Minnesota Twins</option>
                <option value='New_York_Yankees'>New York Yankees</option>
                <option value='New_York_Mets'>New York Mets</option>
                <option value='Oakland_Athletics'>Oakland Athletics</option>
                <option value='Philadelphia_Phillies'>Philadelphia Phillies</option>
                <option value='Pittsburgh_Pirates'>Pittsburgh Pirates</option>
                <option value='San_Diego_Padres'>San Diego Padres</option>
                <option value='San_Francisco_Giants'>San Francisco Giants</option>
                <option value='Seattle_Mariners'>Seattle Mariners</option>
                <option value='St._Louis_Cardinals'>St. Louis Cardinals</option>
                <option value='Tampa_Bay_Rays'>Tampa Bay Rays</option>
                <option value='Texas_Rangers'>Texas Rangers</option>
                <option value='Toronto_Blue_Jays'>Toronto Blue Jays</option>
                <option value='Washington_Nationals'>Washington Nationals</option>
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
                <option value='Arizona_Cardinals'>Arizona Cardinals</option>
                <option value='Atlanta_Falcons'>Atlanta Falcons</option>
                <option value='Baltimore_Ravens'>Baltimore Ravens</option>
                <option value='Buffalo_Bills'>Buffalo Bills</option>
                <option value='Carolina_Panthers'>Carolina Panthers</option>
                <option value='Chicago_Bears'>Chicago Bears</option>
                <option value='Cincinnati_Bengals'>Cincinnati Bengals</option>
                <option value='Cleveland_Browns'>Cleveland Browns</option>
                <option value='Dallas_Cowboys'>Dallas Cowboys</option>
                <option value='Denver_Broncos'>Denver Broncos</option>
                <option value='Detroit_Lions'>Detroit Lions</option>
                <option value='Green_Bay_Packers'>Green Bay Packers</option>
                <option value='Houston_Texans'>Houston Texans</option>
                <option value='Indianapolis_Colts'>Indianapolis Colts</option>
                <option value='Jacksonville_Jaguars'>Jacksonville Jaguars</option>
                <option value='Kansas_City_Chiefs'>Kansas City Chiefs</option>
                <option value='Miami_Dolphins'>Miami Dolphins</option>
                <option value='Minnesota_Vikings'>Minnesota Vikings</option>
                <option value='New_England_Patriots'>New England Patriots</option>
                <option value='New_Orleans_Saints'>New Orleans Saints</option>
                <option value='New_York_Giants'>New York Giants</option>
                <option value='New_York_Jets'>New York Jets</option>
                <option value='Oakland_Raiders'>Oakland Raiders</option>
                <option value='Philadelphia_Eagles'>Philadelphia Eagles</option>
                <option value='Pittsburgh_Steelers'>Pittsburgh Steelers</option>
                <option value='San_Diego_Chargers'>San Diego Chargers</option>
                <option value='San_Francisco_49ers'>San Francisco 49ers</option>
                <option value='Seattle_Seahawks'>Seattle Seahawks</option>
                <option value='St._Louis_Rams'>St. Louis Rams</option>
                <option value='Tampa_Bay_Buccaneers'>Tampa Bay Buccaneers</option>
                <option value='Tennessee_Titans'>Tennessee Titans</option>
                <option value='Washington_Redskins'>Washington Redskins</option>
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
                <option value='Anaheim_Ducks'>Anaheim Ducks</option>
                <option value='Boston_Bruins'>Boston Bruins</option>
                <option value='Buffalo_Sabres'>Buffalo Sabres</option>
                <option value='Calgary_Flames'>Calgary Flames</option>
                <option value='Carolina_Hurricanes'>Carolina Hurricanes</option>
                <option value='Chicago_Blackhawks'>Chicago Blackhawks</option>
                <option value='Colorado_Avalanche'>Colorado Avalanche</option>
                <option value='Columbus_Blue_Jackets'>Columbus Blue Jackets</option>
                <option value='Dallas_Stars'>Dallas Stars</option>
                <option value='Detroit_Red_Wings'>Detroit Red Wings</option>
                <option value='Edmonton_Oilers'>Edmonton Oilers</option>
                <option value='Florida_Panthers'>Florida Panthers</option>
                <option value='Los_Angeles_Kings'>Los Angeles Kings</option>
                <option value='Minnesota_Wild'>Minnesota Wild</option>
                <option value='Montreal_Canadiens'>Montreal Canadiens</option>
                <option value='Nashville_Predators'>Nashville Predators</option>
                <option value='New_Jersey_Devils'>New Jersey Devils</option>
                <option value='New_York_Islanders'>New York Islanders</option>
                <option value='New_York_Rangers'>New York Rangers</option>
                <option value='Ottawa_Senators'>Ottawa Senators</option>
                <option value='Philadelphia_Flyers'>Philadelphia Flyers</option>
                <option value='Phoenix_Coyotes'>Phoenix Coyotes</option>
                <option value='Pittsburgh_Penguins'>Pittsburgh Penguins</option>
                <option value='Saint_Louis_Blues'>Saint Louis Blues</option>
                <option value='San_Jose_Sharks'>San Jose Sharks</option>
                <option value='Tampa_Bay_Lightning'>Tampa Bay Lightning</option>
                <option value='Toronto_Maple_Leafs'>Toronto Maple Leafs</option>
                <option value='Vancouver_Canucks'>Vancouver Canucks</option>
                <option value='Vegas_Golden_Knights'>Vegas Golden Knights</option>
                <option value='Washington_Capitals'>Washington Capitals</option>
                <option value='Winnipeg_Jets'>Winnipeg Jets</option>
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