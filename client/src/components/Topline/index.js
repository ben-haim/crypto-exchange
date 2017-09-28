import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import screenWidth from '../../decorators/screenWidth'
import { loadAllMarkets } from '../../AC'
import { toplineDataSelector } from '../../selectors'


class Topline extends Component {

  static propTypes = {
    chartData: PropTypes.object
  };

  componentDidMount() {
    const { loadAllMarkets, isMobile, toplineData } = this.props
    if(isMobile && !toplineData.length) loadAllMarkets()
  }

  render() {
    const { toplineData } = this.props
    if(toplineData.length) {
      const items = []
      for(let i=0; i<5; i++) {
        items.push(<li key={i} className='topline__coin'><span className='topline__coin-name'>{toplineData[i].coin}: </span><span className='topline__coin-value'>{toplineData[i].last}</span></li>)
      }
      return (
          <section className='header__topline'>
            <div className='container'>
                <div className='topline__content'>
                  <ul className='topline__coin-list'>
                      {items}
                  </ul>
                </div>
            </div>
          </section>
      )
    }
    return null
    }
}


export default connect(
  (state) => ({
    toplineData: toplineDataSelector(state)
  }), { loadAllMarkets })(screenWidth(Topline));
