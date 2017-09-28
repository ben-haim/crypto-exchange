import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import DropDownMenu from '../DropDownMenu'
import {  } from '../../AC'
import { toplineDataSelector } from '../../selectors'


class TopNav extends Component {

  static propTypes = {
    chartData: PropTypes.object
  };

  render() {
      return (
        <div className='header__nav'>
          <div className='container'>
            <nav className='main-nav'>
              <NavLink to={'/'} className='main-nav__link' exact>Home</NavLink>
              <DropDownMenu/>
            </nav>
          </div>
        </div>
      )
    }
}


export default connect(
  (state) => ({
    toplineData: toplineDataSelector(state)
  }))(TopNav);
