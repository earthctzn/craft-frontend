import { combineReducers } from 'redux'
import breweriesReducer from './breweriesReducer'
// import reviewsReducer from './reviewsReducer'


const rootReducer = combineReducers({
    breweries: breweriesReducer
    // reviews: reviewsReducer
})

export default rootReducer