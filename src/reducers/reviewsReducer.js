import { 
    LOADING_REVIEWS,
    SET_REVIEW,
    ADD_REVIEW,
    SET_REVIEWS,
    SELECTED_REVIEW
} from '../actionTypes/index'

export default function reviewsReducer(state = {reviewsArr: [], review: null, loading: false}, action) {
    switch(action.type) {
        case LOADING_REVIEWS:
            return {
                ...state,
                reviewsArr: [...state.reviewsArr],
                loading: true
            }
        case SET_REVIEW:
                return {
                    ...state,
                    review: action.payload,
                    loading: false
                }    
        case ADD_REVIEW:
            return {
                ...state, 
               reviewsArr: [...state.reviewsArr, action.payload],
                loading: false
            }
            
        case SET_REVIEWS:
            
            return {
                ...state, 
                reviewsArr: action.payload,
                loading: false
            }

        case SELECTED_REVIEW:
            return {
                ...state, 
                review: action.payload,
                loading: false
            }
        default:
            return state;
    }
}