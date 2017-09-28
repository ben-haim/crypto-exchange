import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import OrdersList from '../OrdersList'
import { loadOrders } from '../../AC'
import { chartDataSelector } from '../../selectors'


class Orders extends Component {

  static propTypes = {
    pair: PropTypes.string.isRequired,
    chartData: PropTypes.object
  };

  componentWillReceiveProps(nextProps) {
    const { loadOrders, pair } = this.props
    if(pair !== nextProps.pair) {loadOrders(nextProps.pair)}

  }

  componentDidMount() {
    const { pair, loadOrders } = this.props
    loadOrders(pair)
  }

  render() {
    const { pair, chartData } = this.props
    if(chartData && chartData.orders ) {
      const asks = chartData.orders.asks
      const bids = chartData.orders.bids
      return (
        <div className='orders'>
          <OrdersList type={'sell'} data={asks} pair={pair}/>
          <OrdersList type={'buy'} data={bids} pair={pair}/>
        </div>
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
{ loadOrders })(Orders);
