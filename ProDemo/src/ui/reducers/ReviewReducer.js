
import { GET_REVIEW_DATA } from '../actionTypes/ReviewActionTypes';


const initialState = {
    reviewData: null,
}

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REVIEW_DATA:
            return {
            ...state, reviewData: action.payload
            }    
        default:
            return state;
    }
}

export default reviewReducer;