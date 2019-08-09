import React from 'react'
import { connect } from 'react-redux'
import store from '../redux-state/store'


import Body from './Body.jsx';

window.store = store

class AppInformation extends React.Component {
  state = {

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