import cakeReducer from './Cake/cakeReducers'
import { createStore } from 'redux'
const store = createStore(cakeReducer)
export default store