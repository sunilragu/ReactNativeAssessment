
import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

const orderReducer = (state = {}, action) => {

    switch (action.type) {
      case types.ORDER_REVIEW:
        return action.payload
      default:
        return state
    }
  }
  
  export default orderReducer;
  
//   export default combineReducers({
//     orderReducer
//   })