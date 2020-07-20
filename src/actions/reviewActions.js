import { 
    ADD_REVIEW,
    SET_REVIEW,
    SET_REVIEWS,
    LOADING_REVIEWS    
} from '../actionTypes/index'

const reviewsURL = 'https://craft-brew-backend.herokuapp.com/api/v1/reviews'


//State altering actions
export function addReview(review) {
    return {
        type: ADD_REVIEW,
        payload: review
    }
}

export function setReview(reviews) {
    return { 
        type: SET_REVIEW, 
        payload: reviews
    }  
}

export function setReviews(reviews) {
    return { 
        type: SET_REVIEWS, 
        payload: reviews
    }  
}

//Fetch (GET) all available reviews from backend

export const fetchReviews = () => {

    return async dispatch => {
        try {
            dispatch({ type: LOADING_REVIEWS})
                const response = await fetch(reviewsURL, {credentials: 'include'})
                if (!response.ok) {
                    throw response
                }
                const reviewData = await response.json()
                dispatch(setReviews(reviewData))
        }catch(data){
                console.log(data)
        }
    }
}


//Fetch (POST) a new review with it's brewery and user.
export const createReview = (token, data) => {
    return async dispatch => {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json')
        headers.append('Accepts', 'application/json')
        headers.append('X-CSRF-Token', token)

        const formData = { 
            review: {
                content: data.content,
                user_id: data.user_id,
                brewery_id: data.brewery.id
            },
            brewery: data.brewery
        }

        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(formData),
            credentials: 'include'
        }

        try{
            const response = await fetch(reviewsURL, options)
            if(!response.ok) {
                throw response
            }
            const dataObj = await response.json()
            dispatch(addReview(dataObj))
            dispatch(setReview(dataObj))
            
        }catch(data){
            console.log(data)
        }
    }
}
