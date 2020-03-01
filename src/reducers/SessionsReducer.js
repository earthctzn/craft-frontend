export default function SessionsReducer(state = {cookie: ""}, action) {
    switch(action.type) {
        case "SET_COOKIE":
            return {
                cookie: [action.cookie]
            }
        default:
            return state
    }

}