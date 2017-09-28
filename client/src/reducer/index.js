import {combineReducers} from 'redux'
import markets from './markets'
import charts from './charts'

export default combineReducers({
    markets, charts
})
