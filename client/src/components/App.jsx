import React from 'react'
import { connect } from 'react-redux'
import store from '../redux-state/store'

import Header from './Header.jsx'
import AboutMe from './AboutMe.jsx'

window.store = store

class AppInformation extends React.Component {
  state = {

  }

  render () {
    return (
      <div>
        <Header />
        <AboutMe />
      </div>
    )
  }
}

const App = connect(null)(AppInformation)

export default App