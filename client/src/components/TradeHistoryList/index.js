import React, { Component } from 'react';
import PropTypes from 'prop-types'
import TradeHistoryEl from '../TradeHistoryEl'

class TradeHistoryList extends Component {

  static propTypes = {
    pair: PropTypes.string,
    data: PropTypes.array
  };

  render() {
    const { pair, data  } = this.props
    const market = pair.split('_')[0];
    const coin = pair.split('_')[1];
    const trades = data ?
          data.map( (trade, index) => <TradeHistoryEl key ={index} trade={trade}/> ) : null
    return (
        <div className='trade-history__wrap'>
          <h3 className='trade-history__header'>Trade history</h3>
          <div className='trade-history-list'>
            <div className='trade-history-list__headers'>
                    <span className='trade-history-list__header-item'>Date</span>
                    <span className='trade-history-list__header-item'>Type</span>
                    <span className='trade-history-list__header-item'>Price ({market})</span>
                    <span className='trade-history-list__header-item'>Amount ({coin})</span>
                    <span className='trade-history-list__header-item'>Total ({market})</span>
            </div>
            <ul className='trade-history-list__scroll-body'>
                {trades}
            </ul>
          </div>
        </div>
    );
  }

}

export default TradeHistoryList
