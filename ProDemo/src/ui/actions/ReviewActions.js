import { GET_REVIEW_DATA } from '../actionTypes/ReviewActionTypes';

export const getReviewData = (result) => {
    return {
        type: GET_REVIEW_DATA,
        payload: result
    }
}