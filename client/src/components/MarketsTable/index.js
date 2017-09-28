import React, { Component } from 'react';
import PropTypes from 'prop-types'
import screenWidth from '../../decorators/screenWidth'

class MarketsTable extends Component {

  static propTypes = {
    handleClick: PropTypes.func,
    getClassName: PropTypes.func,
    markets: PropTypes.array
  };

  render() {
    const { handleClick, getClassName, markets, pair, isMobile  } = this.props

    if(pair || isMobile) return (
      <table className='markets-list__table'>
        <thead>
            <tr onClick={handleClick}>
                <th data-column='pair' className={'markets-list__table-header-left '+ getClassName('pair')}>Coin</th>
                <th data-column='baseVolume' className={getClassName('baseVolume')}>Volume</th>
                <th data-column='percentChange' className={getClassName('percentChange')}>% Change</th>
                <th data-column='last' className={getClassName('last')}>Price</th>
            </tr>
        </thead>
        <tbody>
            {markets}
        </tbody>
      </table>
    )
    return (
          <table className='markets-list__table'>
            <thead>
                <tr onClick={handleClick}>
                    <th data-column='pair' className={'markets-list__table-header-left '+getClassName('pair')}>Market</th>
                    <th data-column='coin' className={'markets-list__table-header-left '+ getClassName('coin')}>Currency</th>
                    <th data-column='baseVolume' className={getClassName('baseVolume')}>Volume</th>
                    <th data-column='percentChange' className={getClassName('percentChange')}>% Change</th>
                    <th data-column='last' className={getClassName('last')}>Last Price</th>
                    <th data-column='high24hr' className={getClassName('high24hr')}>24hr High</th>
                    <th data-column='low24hr' className={getClassName('low24hr')}>24hr Low</th>
                </tr>
            </thead>
            <tbody>
                {markets}
            </tbody>
          </table>
    );
  }

}

export default screenWidth(MarketsTable)
