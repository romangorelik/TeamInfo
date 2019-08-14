import React from 'react'
import { connect } from 'react-redux'
import store from '../redux-state/store'


import Body from './Body.jsx';

window.store = store

class AppInformation extends React.Component {
  state = {

  }
  
  componentDidMount () {
    this.removeHash();
  }

  removeHash = () => { 
    var scrollV, scrollH, loc = window.location;
    if ("pushState" in history)
        history.pushState("", document.title, loc.pathname + loc.search);
    else {
        scrollV = document.body.scrollTop;
        scrollH = document.body.scrollLeft;

        loc.hash = "";

        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
    }
  }

  render () {
    return (
      <div>
        <Body />
      </div>
    )
  }
}

const App = connect(null)(AppInformation)

export default App