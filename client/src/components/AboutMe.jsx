import React from 'react'
import { connect } from 'react-redux'

class AboutMe extends React.Component {
  state = {

  }

  render () {
    return (
      <div className='about-me-container'>
        <div className="row">
          <h2 className="heading-title">Explore our recipes</h2>
          <div className="col-1-of-2">
            <h2 className="heading-secondary">Look for meal recipes</h2>
            <p className="paragraph p-1">Take a look at any of our meal recipes, with both ingredients and pictures, to give you inspiration to make your next dinner! Happy eating!</p>

            <h2 className="heading-secondary">Look for drink recipes</h2>
            <p className="paragraph p-2">Find the perfect drink to accompany your dinner here. Search by liqour or if you have a preferred drink, search by the name! Happy drinking!</p>
          </div>
          <div className="col-1-of-2">
            <div className="image-container">
              <img src="https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1586&q=80" alt="Image 1" className="images images--1"/>
              <img src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Image 2" className="images images--2"/>
              <img src="https://images.unsplash.com/photo-1484344597163-9347ad5cb26d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1918&q=80" alt="Image 3" className="images images--3"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe
