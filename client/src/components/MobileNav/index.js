import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MobileMenu from '../MobileMenu'
import {  } from '../../AC'
import { toplineDataSelector } from '../../selectors'


class MobileNav extends Component {

  static propTypes = {
    chartData: PropTypes.object
  };

  render() {
      return (
        <div className='header__mobile-nav'>
            <nav className='mobile-nav'>
              <MobileMenu/>
            </nav>
        </div>
      )
    }
}


export default connect(
  (state) => ({
    toplineData: toplineDataSelector(state)
  }))(MobileNav);
