import React from 'react'
import { connect } from 'react-redux'

class TeamViewJSX extends React.Component {
  render () {
    return (
      <main className='team-view'>Hello body</main>
    )
  }
}

const TeamView = connect(null)(TeamViewJSX)

export default TeamView