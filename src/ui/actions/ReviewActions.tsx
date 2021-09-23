import { Root } from '../../api/model/ReviewModel';
import { GET_REVIEW_DATA } from '../actionTypes/ReviewActionTypes';

export const getReviewData = (result:Root) => {
    return {
        type: GET_REVIEW_DATA,
        payload: result
    }
}