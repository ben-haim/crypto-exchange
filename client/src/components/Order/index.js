import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateTradeForm } from '../../AC'

class Order extends Component {
  render() {
    const { order } = this.props
    return (
      <li className='orders-list__row'>
        <span className='orders-list__price orders-list__item' onClick={this.handleClick(order[0])}>{order[0]}</span>
        <span className='orders-list__coin orders-list__item'>{order[1]}</span>
        <span className='orders-list__sum orders-list__item'>{order[2]}</span>
      </li>
    )
  }
  handleClick = value => () => {
    const { pair, type, updateTradeForm } = this.props
    console.log(pair, type, value)

    updateTradeForm({currentPair: pair, inputType: 'price', orderType: type, value: value})
  }

}
export default connect((state) => {return {} }, { updateTradeForm })(Order);
