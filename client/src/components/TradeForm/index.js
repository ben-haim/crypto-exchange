import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateTradeForm } from '../../AC'
import { chartDataSelector, currentPairSelector } from '../../selectors'

class TradeForm extends Component {

  render() {
    const { orderType, market, chartData } = this.props
      return (
        <div className='trade-form-wrap'>
        <h3 className='trade-form__header'>{orderType} {market.coin}</h3>
          <form className='trade-form' onChange={this.handleChange}>
            <div className='trade-form__item'>
              <label htmlFor={'price-'+orderType} className='trade-form__label'>Price</label>
              <input data-type='price' type='text' id={'price-'+orderType} className='trade-form__input' value={chartData[orderType].price}></input>
              <span>{market.market}</span>
            </div>
            <div className='trade-form__item'>
              <label htmlFor={'amount-'+orderType} className='trade-form__label'>Amount</label>
              <input data-type='amount' type='text' id={'amount-'+orderType} className='trade-form__input' value={chartData[orderType].amount}></input>
              <span>{market.coin}</span>
            </div>
            <div className='trade-form__item'>
              <label htmlFor='total' className='trade-form__label'>Total</label>
              <input type='text' id='total' className='trade-form__input' value={this.handleTotal()}></input>
              <span>{market.market}</span>
            </div>
          </form>
        </div>
      )
  }

  handleChange = (ev) => {
    const { orderType, pair, updateTradeForm } = this.props
    const { value } = ev.target
    const inputType = ev.target.getAttribute('data-type')
    if( ( (!isNaN( parseFloat(value)) && isFinite(value)) || !value ) && inputType ) {
      updateTradeForm({currentPair: pair, orderType, inputType, value})
    }
  }

  handleTotal = () => {
    const { chartData, orderType } = this.props
    if(chartData[orderType].price && chartData[orderType].amount) {
      return +chartData[orderType].price * +chartData[orderType].amount
    }
    return ''
  }
}

export default connect(
  (state) => ({
    currentPair: currentPairSelector(state),
    chartData: chartDataSelector(state)
  }),
{ updateTradeForm })(TradeForm);
