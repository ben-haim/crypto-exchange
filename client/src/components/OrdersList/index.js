import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Order from '../Order'

class OrdersList extends Component {

  static propTypes = {
    data: PropTypes.array,
    pair: PropTypes.string,
    type: PropTypes.string
  };

  render() {
    const { pair, type, data  } = this.props
    const market = pair.split('_')[0];
    const coin = pair.split('_')[1];
    const orders = data ?
          data.map( (order, index) => <Order key ={index} order={order} pair={pair} type={type}/> ) : null
    return (
        <div className='orders-list__wrap'>
            <h3 className='orders-list__header'>{type} orders</h3>
            <div className='orders-list'>
                <div className='orders-list__headers'>
                    <span className='orders-list__header-item'>Price</span>
                    <span className='orders-list__header-item'>{coin}</span>
                    <span className='orders-list__header-item'>Sum ({market})</span>
                </div>
                <ul className='orders-list__scroll-body'>
                    {orders}
                </ul>
            </div>
        </div>
    );
  }

}

export default OrdersList
