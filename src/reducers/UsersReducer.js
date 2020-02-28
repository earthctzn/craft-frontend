export default function UsersReducer(state= {user: [], formErrors: []}, action) {
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
            console.log("inside add erros reducer", errors)
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