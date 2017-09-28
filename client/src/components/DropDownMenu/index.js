import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link, NavLink} from 'react-router-dom'
import { tradeMarketsSelector, allMarketsSortedSelector } from '../../selectors'

class DropDownMenu extends Component {

  render() {
    const { tradeMarkets, allMarketsSorted } = this.props
    if(tradeMarkets.length) {
      const menuItems =  tradeMarkets.map((item, index) => <li key={index} className='dropdown__item'>{item} Market<div className='dropdown__sub'>{allMarketsSorted[item]
                                     .map((sub, index) => <Link key={index} to={'/trade/'+sub.market+'-'+sub.coin} className='dropdown__sub-link'>{sub.coin}</Link>)}</div></li>)
      return (
        <div className='main-nav__dropdown'>
            <NavLink to={'/trade'} className='main-nav__link'>Markets
            <svg viewBox="0 0 444.819 444.819" className='main-nav__arrow'>
            	<path id="icon" d="M434.252,114.203l-21.409-21.416c-7.419-7.04-16.084-10.561-25.975-10.561c-10.095,0-18.657,3.521-25.7,10.561   L222.41,231.549L83.653,92.791c-7.042-7.04-15.606-10.561-25.697-10.561c-9.896,0-18.559,3.521-25.979,10.561l-21.128,21.416   C3.615,121.436,0,130.099,0,140.188c0,10.277,3.619,18.842,10.848,25.693l185.864,185.865c6.855,7.23,15.416,10.848,25.697,10.848   c10.088,0,18.75-3.617,25.977-10.848l185.865-185.865c7.043-7.044,10.567-15.608,10.567-25.693   C444.819,130.287,441.295,121.629,434.252,114.203z" fill="#000333"/>
            </svg>
            </NavLink>
            <ul className='main-nav__dropdown-list'>
                {menuItems}
            </ul>
        </div>
      )
    }
    return null
  }

}

export default connect(
  (state) => ({
    tradeMarkets: tradeMarketsSelector(state),
    allMarketsSorted: allMarketsSortedSelector(state)
  }))(DropDownMenu);
