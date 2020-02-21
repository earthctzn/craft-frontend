export default function breweriesReducer(state = [], action) {
    switch(action.type) {
        case "ADD_BREWERIES":
            return [...state, action.breweries]
             
        default:
            return state;
    }
}