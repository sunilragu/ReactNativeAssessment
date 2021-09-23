
import { type } from 'os';
import { Root } from '../../api/model/ReviewModel';
import { GET_REVIEW_DATA } from '../actionTypes/ReviewActionTypes';


// type initialState = {
//     reviewData: Root
// }

const reviewReducer = (state:Root, action:any) => {
    switch (action.type) {
        case GET_REVIEW_DATA:
            return action.payload;
            // return {
            // ...state, 
            // reviewData: action.payload
            // }    
        default:
            return state;
    }
}

export default reviewReducer;