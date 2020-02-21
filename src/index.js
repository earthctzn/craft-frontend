import React from 'react';
import ReactDOM from 'react-dom';

import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import breweriesReducer from '../reducers/breweriesReducer'
import reviewsReducer from '../reducers/reviewsReducer'
import App from './App';

const rootReducer = combineReducers({
    breweries: breweriesReducer,
    reviews: reviewsReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__({trace: true})
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));


