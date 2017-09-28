import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { tradeMarketsSelector, allMarketsSortedSelector } from '../../selectors'
import { slide as Menu } from 'react-burger-menu'

class MobileMenu extends Component {

  state = {
    isOpen: false
  }

  render() {
    const { tradeMarkets, allMarketsSorted } = this.props
    if(tradeMarkets.length) {
      console.log(this.state.isOpen)
      const menuItems =  tradeMarkets.map((item, index) => <li key={index}><span className='burger-menu__item'>{item} Market</span><div className='burger-menu__sub'>{allMarketsSorted[item]
                                     .map((sub, index) => <Link key={index} to={'/trade/'+sub.market+'-'+sub.coin} className='burger-menu__sub-el' onClick={this.handleClick}>{sub.coin}</Link>)}</div></li>)
      return (
              <Menu isOpen = { this.state.isOpen }>
                <NavLink to={'/'} exact className='burger-menu__item'>Home</NavLink>
                <ul className='burger-menu__list'>
                  {menuItems}
                </ul>
              </Menu>
      )
    }
    return null
  }

  handleClick = () => {
    this.setState({isOpen: false})
  }

}

export default connect(
  (state) => ({
    tradeMarkets: tradeMarketsSelector(state),
    allMarketsSorted: allMarketsSortedSelector(state)
  }))(MobileMenu);
