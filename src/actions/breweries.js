export const fetchBreweries = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_BREWERIES'})
        fetch('https://api.openbrewerydb.org/breweries')
        .then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({ type: 'ADD_BREWERIES', breweries: responseJSON })
        })
    }
}