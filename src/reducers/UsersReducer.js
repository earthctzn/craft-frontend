export default function UsersReducer(state= {user: null, formErrors: []}, action) {
    switch(action.type) {
        case "SET_USER":
            console.log("inside set user reducer", action.payload)
                return {
                    ...state,
                  user: action.payload.username
                }
        case "ADD_ERRORS":
            
             let errors = action.payload.errors.map(err => {
                return  err
            })
            return {
                ...state, formErrors: errors
            }
        case "CLEAR_ERRORS":
            return {
                ...state,
                formErrors: []
            }
      
        default:
            return state
    }

}