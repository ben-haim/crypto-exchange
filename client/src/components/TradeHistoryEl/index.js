import React, { Component } from 'react';


class TradeHistoryEl extends Component {
  render() {
    const {trade} = this.props
    return (
      <li className='trade-history-list__el'>
        <span className='trade-history-list__price trade-history-list__item'>{trade.date}</span>
        <span className='trade-history-list__coin trade-history-list__item'>{trade.type}</span>
        <span className='trade-history-list__coin trade-history-list__item'>{trade.rate}</span>
        <span className='trade-history-list__sum trade-history-list__item'>{trade.amount}</span>
        <span className='trade-history-list__sum trade-history-list__item'>{trade.total}</span>
      </li>
    )
  }
}

export default TradeHistoryEl
