import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import screenWidth from '../../decorators/screenWidth'

class Market extends Component {

  render() {
    const { market, pair,  isMobile } = this.props;
    const currentPair = market.pair.replace('_', '-')
    if(pair || isMobile) return (
      <tr className={pair===currentPair ? 'markets-list__table-row markets-list__table-row--active' : 'markets-list__table-row'}>
        <td className='markets-list__market markets-list__item'><Link to={'/trade/'+currentPair}>{market.coin}</Link></td>
        <td className='markets-list__volume markets-list__item'>{market.baseVolume}</td>
        <td className='markets-list__percent-change markets-list__item'><span className={market.percentChange>0 ? 'markets-list__percent--plus': 'markets-list__percent--minus' }>{market.percentChange} %</span></td>
        <td className='markets-list__price markets-list__item'>{market.last}</td>
      </tr>
      )

    return (
      <tr className='markets-list__table-row'>
        <td className='markets-list__market markets-list__item'><Link to={'/trade/'+market.market+'-'+market.coin}>{market.market}-{market.coin}</Link></td>
        <td className='markets-list__coin markets-list__item'>{market.coin}</td>
        <td className='markets-list__volume markets-list__item'>{market.baseVolume}</td>
        <td className='markets-list__percent-change markets-list__item'><span className={market.percentChange>0 ? 'markets-list__percent--plus': 'markets-list__percent--minus' }>{market.percentChange} %</span></td>
        <td className='markets-list__price markets-list__item'>{market.last}</td>
        <td className='markets-list__high markets-list__item'>{market.high24hr}</td>
        <td className='markets-list__low markets-list__item'>{market.low24hr}</td>
      </tr>
    )
  }
}

export default screenWidth(Market);
