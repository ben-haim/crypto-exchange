import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TradeForm from '../TradeForm'
import {  } from '../../AC'
import { marketDataSelector } from '../../selectors'


class Trade extends Component {

  static propTypes = {
    marketData: PropTypes.object
  };


  render() {
    const { marketData, pair } = this.props

     if (marketData) {
       return (
        <div className='trade'>
            <TradeForm orderType={'sell'} market = {marketData} pair={pair}/>
            <TradeForm orderType={'buy'} market = {marketData}pair={pair}/>
        </div>
      )
    } else {return null}
  }

}

export default connect(
  (state) => ({
      marketData: marketDataSelector(state)
  }),
{  })(Trade);
