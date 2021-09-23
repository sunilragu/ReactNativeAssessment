

import { Root } from '../../api/model/ReviewModel';
import { GET_REVIEW_DATA } from '../actionTypes/ReviewActionTypes';



interface IReviewData{
    type:String,
    payload:Root
}

const reviewReducer = (state:{}, action:IReviewData) => {
    switch (action.type) {
        case GET_REVIEW_DATA:
            return action.payload;  
        default:
            return state;
    }
}

export default reviewReducer;