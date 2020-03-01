import { combineReducers } from 'redux'
import breweriesReducer from './breweriesReducer'
import UsersReducer from './UsersReducer'
import reviewsReducer from './reviewsReducer'
// import SessionsReducer from './SessionsReducer'


const rootReducer = combineReducers({
    breweries: breweriesReducer,
    users: UsersReducer,
    sessions: SessionsReducer,
    reviews: reviewsReducer
})

export default rootReducer