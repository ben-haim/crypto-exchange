import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Market from '../Market'
import MarketsToggle from '../MarketsToggle'
import MarketsTable from '../MarketsTable'
import { loadAllMarkets, sortMarkets } from '../../AC'
import { chartsByMarketSelector, marketSelector, sortBySelector, sortOrderSelector } from '../../selectors'


class Markets extends Component {

  static propTypes = {
    marketsData: PropTypes.array.isRequired,
    market: PropTypes.string,
    sortBy: PropTypes.string,
    sortOrder: PropTypes.bool,
    pair: PropTypes.string
  };
  componentDidMount() {
    const { loadAllMarkets } = this.props
    loadAllMarkets()
  }

  render() {
    const { marketsData, market, pair } = this.props
    const markets = marketsData ?
          marketsData.map( (market) => <Market key={market.id} market={market} pair={pair} /> ) : null
    return (
      <div className='markets-list-container'>
        <MarketsToggle market={market}/>
        <MarketsTable
            getClassName = { this.getClassName }
            handleClick = { this.handleClick }
            markets = { markets }
            pair = { pair }
        />
      </div>
    )
  }
  handleClick = (ev) => {
    const { sortMarkets, sortBy, sortOrder } = this.props
    const column = ev.target.getAttribute('data-column')
    column === sortBy ? sortMarkets(column, !sortOrder) : sortMarkets(column, false)
  }
  getClassName = (value) => {
    const { sortBy, sortOrder } = this.props
    if(value === sortBy) {
      return sortOrder ? ('markets-list__table-header markets-list__table-header--sorted-up') :
                         ('markets-list__table-header markets-list__table-header--sorted-down')
    }
    return 'markets-list__table-header'
  }
}

export default connect(
  (state) => ({
    marketsData: chartsByMarketSelector(state),
    market: marketSelector(state),
    sortBy: sortBySelector(state),
    sortOrder: sortOrderSelector(state)
  }),
{ loadAllMarkets, sortMarkets })(Markets);
