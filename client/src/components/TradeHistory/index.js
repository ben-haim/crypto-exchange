import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TradeHistoryList from '../TradeHistoryList'
import { loadTradeHistory } from '../../AC'
import { chartDataSelector } from '../../selectors'


class TradeHistory extends Component {

  static propTypes = {
    pair: PropTypes.string.isRequired,
    ordersData: PropTypes.object
  };

  componentWillReceiveProps(nextProps) {
    const { loadTradeHistory, pair } = this.props
    if(pair !== nextProps.pair) {loadTradeHistory(nextProps.pair)}

  }

  componentDidMount() {
    const { pair, loadTradeHistory } = this.props
    loadTradeHistory(pair)
  }

  render() {
    const { pair, chartData } = this.props
    if(chartData && chartData.tradeHistory) {
      return (
        <section className='trade-history'>
          <TradeHistoryList  data={chartData.tradeHistory} pair={pair}/>
        </section>
      )
    } else {
      return null
    }
  }
}


export default connect(
  (state) => ({
    chartData: chartDataSelector(state)
  }),
{ loadTradeHistory })(TradeHistory);
