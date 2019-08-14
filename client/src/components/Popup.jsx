import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    favorites: state.favorites
  }
}

class PopupJSX extends React.Component {
  render () {
    return (
      <div className='popup' id='favorites'>
        <div className="popup__content">
          <ul className="popup__list">
            {this.props.favorites.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <li className='popup__list-item'><i className="fas fa-heart-broken popup__unfavorite" /><a href='#header' className='popup__item'>{item}</a></li>
                </React.Fragment>
                
              )
            })}
          </ul>
          <a href="#header" className="popup__close">&times;</a>
        </div>
      </div>
    )
  }
}

const Popup = connect(mapStateToProps)(PopupJSX)

export default Popup