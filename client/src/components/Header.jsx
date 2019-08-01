import React from 'react'
import { connect } from 'react-redux'

class HeaderInfo extends React.Component {
  state = {
    inputPlaceholder: ''
  }

  submitForm = (e) => {
    e.preventDefault()
    this.setState({
      inputPlaceholder: ''
    })
  }

  changeInput = (e) => {
    this.setState({
      inputPlaceholder: e.target.value
    })
  }

  render () {
    return (
      <header className='header'>
        <div className="header__logo-box">
          <i className="fas fa-cocktail fa-7x header__logo"></i>
        </div>

        <div className="heading-primary">
          <h1 className="heading-primary--main">Food and Drink</h1>
          <h1 className="heading-primary--sub">Search for your favorite meal</h1>

          <form className='heading-form' onSubmit={this.submitForm}>
            <input placeholder='Search here' value={this.state.inputPlaceholder} className='heading-form--input' onChange={this.changeInput}/>
          </form>
        </div>
      </header>
    )
  }
}

const Header = connect(null)(HeaderInfo)

export default Header