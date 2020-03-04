export default function tokensReducer(state = "", action) {
    switch(action.type) {
        case 'SET_TOKEN':
            return action.payload
            
        default:
            return state
    }

}