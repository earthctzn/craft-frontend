import {
    SET_USER,
    ADD_ERRORS,
    CLEAR_ERRORS
} from '../actionTypes/index'

export default function loginReducer(state= {user: null, formErrors: []}, action) {
    switch(action.type) {
        case SET_USER:
            return {
                  ...state,
                  user: action.payload
                }
        case ADD_ERRORS:
            
             let errors = action.payload.errors.map(err => {
                return  err
            })
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