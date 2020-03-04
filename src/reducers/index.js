import { combineReducers } from 'redux'
import breweriesReducer from './breweriesReducer'
import loginReducer from './loginReducer'
import reviewsReducer from './reviewsReducer'
import tokensReducer from './tokenReducer'


const rootReducer = combineReducers({
    breweries: breweriesReducer,
    users: loginReducer,
    tokens: tokensReducer,
    reviews: reviewsReducer
})

export default rootReducer