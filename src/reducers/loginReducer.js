import {
    SET_USER,
    ADD_ERRORS,
    CLEAR_ERRORS,
    CLEAR_USER
} from '../actionTypes/index'

export default function loginReducer(state= {user: null, formErrors: [], loggedIn: false}, action) {
    switch(action.type) {
        case SET_USER:
            return {
                  ...state,
                  user: action.payload,
                  loggedIn: true
                }
        case CLEAR_USER:
            return {
                ...state,
                user: null,
                loggedIn: false
            }
        case ADD_ERRORS:
            let errors 
            if(action.payload.errors !== undefined){
              errors = action.payload.errors.map(err => {
                    return  err
                })   
            } else {
                return action.payload
            }

            return {
                ...state, formErrors: errors
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                formErrors: []
            }
      
        default:
            return state
    }

}