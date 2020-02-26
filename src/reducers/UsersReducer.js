export default function UsersReducer(state= {user: []}, action) {
    switch(action.type) {
        case "SET_USER":
            console.log(action)
            return {
                user: [action.payload]
            }
        default:
            return state
    }

}