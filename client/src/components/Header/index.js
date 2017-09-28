import React, { Component } from 'react'
import Topline from '../Topline'
import TopNav from '../TopNav'
import screenWidth from '../../decorators/screenWidth'
import MobileNav from '../MobileNav'

class Header extends Component {

  render() {
    const { isMobile } = this.props
    const nav = isMobile ? <MobileNav /> : <TopNav />
      return (
        <header className='header'>
          <Topline />
          { nav }
        </header>
      )
  }

}
export default screenWidth(Header);
