export function addReview(review) {
    return {
        type: "ADD_REVIEW",
        payload: review
    }
}

export function setReview(reviews) {
    return { 
        type: "SET_REVIEW", 
        payload: reviews
    }  
}

export function setReviews(reviews) {
    return { 
        type: "SET_REVIEWS", 
        payload: reviews
    }  
}

export const fetchReviews = () => {

    return async dispatch => {
        try {
            dispatch({ type: 'LOADING_REVIEWS'})
                const response = await fetch('http://localhost:3000/api/v1/reviews')
                if (!response.ok) {
                    throw response
                }
                const reviewData = await response.json()
                dispatch(setReviews(reviewData))
        }catch(data){
                alert(data)
        }
    }
}