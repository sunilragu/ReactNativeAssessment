import { getOrderReviewData } from "../api/OrderReviewData"
import * as types from '../constants/ActionTypes'

// const orderAction = order => ({
//     type: types.ORDER_REVIEW,
//     order
//   })
  
//   export const orderReview = () => {
//       orderAction(getOrderReviewData);
//   }


  export function orderAction(order) {
    return {
      type: types.ORDER_REVIEW,
      payload: order
    }
  }