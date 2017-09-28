import React, { Component } from 'react';
import Chart from '../Chart'
import Markets from '../Markets'
import Trade from '../Trade'
import Orders from '../Orders'
import TradeHistory from '../TradeHistory'
import screenWidth from '../../decorators/screenWidth'


class TradePage extends Component {



  render() {
    const { pair, isMobile } = this.props
    const pairFormatted = pair.replace('-', '_')
    const marketsTab = isMobile ? null : (<div className='trade-page__left'><Markets pair = { pair } /></div>)
    return (
      <div className="trade-page">
          <div className='trade-page__content'>
            {marketsTab}
            <div className='trade-page__right'>
              <Chart pair = { pairFormatted } />
              <Trade pair = { pairFormatted } />
              <Orders pair = { pairFormatted } />
              <TradeHistory pair = { pairFormatted } />
            </div>
          </div>
      </div>
    );
  }
}

export default screenWidth(TradePage);
