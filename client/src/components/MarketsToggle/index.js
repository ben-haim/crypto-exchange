import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectMarket } from '../../AC'
import { tradeMarketsSelector } from '../../selectors'

class MarketsToggle extends Component {

  render() {
    const { tradeMarkets } = this.props
    if(tradeMarkets.length) {
      const buttons = tradeMarkets.map((market, index) => <button key = {index} type='button' value= {market}  className={this.getClassName(market)}>{market} Market</button>)
      return (
          <div className='markets-list__nav'>
            <div onClick = {this.handleChange} className='markets-list__buttons-wrap'>
                {buttons}
            </div>
          </div>
      )
    }
    return null
  }

  handleChange = (ev) => {
    const { selectMarket } = this.props
    selectMarket(ev.target.value)
  }
  getClassName = (value) => {
    const { market } = this.props
    return market === value ? 'markets-list__button markets-list__button--active' : 'markets-list__button'
  }
}

export default connect(
  (state) => ({
    tradeMarkets: tradeMarketsSelector(state)
  }), { selectMarket })(MarketsToggle);
