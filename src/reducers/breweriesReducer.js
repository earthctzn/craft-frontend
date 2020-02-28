export default function breweriesReducer(state = {breweriesArr: [], brewery: {}, loading: false}, action) {
    switch(action.type) {
        case "LOADING_BREWERIES":
            return {
                ...state,
                breweriesArr: [...state.breweriesArr],
                loading: true
            }
            
        case "ADD_BREWERIES":
            return {
                ...state, 
                breweriesArr: action.payload,
                loading: false
            }

        case "SELECTED_BREWERY":
            return {
                ...state, brewery: action.payload
            }
        default:
            return state;
    }
}