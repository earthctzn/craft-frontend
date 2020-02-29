export default function reviewsReducer(state = {reviewsArr: [], review: [], loading: false}, action) {
    switch(action.type) {
        case "LOADING_REVIEWS":
            return {
                ...state,
                reviewsArr: [...state.reviewsArr],
                loading: true
            }
        case "SET_REVIEW":
                return {
                    ...state,
                    review: action.payload,
                    loading: false
                }    
        case "ADD_REVIEW":
            return {
                ...state, 
               reviewsArr: [...state.reviewsArr, action.payload],
                loading: false
            }
            
        case "SET_REVIEWS":
            console.log(action.payload)
            return {
                ...state, 
                reviewsArr: action.payload,
                loading: false
            }

        case "SELECTED_REVIEW":
            return {
                ...state, 
                review: action.payload
            }
        default:
            return state;
    }
}