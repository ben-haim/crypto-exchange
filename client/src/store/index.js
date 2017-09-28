import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import thunk from 'redux-thunk'
import getApi from '../middlewares/getApi'

const enhancer = applyMiddleware(thunk, getApi)

const store = createStore(reducer, {}, enhancer)



//dev only
window.store = store

export default store
