import { LOAD_MARKETS, SELECT_MARKET, SORT_MARKETS, SUCCESS } from '../constants'

const defaultState = {
  marketsList:[],
  marketSelected:'BTC',
  sortBy:'baseVolume',
  sortOrder: false
}

export default (marketsState = defaultState, action) => {
  const {type, response, payload} = action
  switch(type) {
    case LOAD_MARKETS+SUCCESS:
      return {...marketsState, marketsList: response }
    case SELECT_MARKET:
        return {...marketsState, marketSelected: payload}
    case SORT_MARKETS:
        return {...marketsState, sortBy: payload.column, sortOrder: payload.sortOrder }
  }
  return marketsState
}
