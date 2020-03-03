
const setBreweries = ( breweries ) => {
    return { type: 'ADD_BREWERIES', payload: breweries }
}


export const fetchBreweries = (props) => {

    return async dispatch => {
        try {
            dispatch({ type: 'LOADING_BREWERIES'})
                const response = await fetch(`https://api.openbrewerydb.org/breweries`)
                if (!response.ok) {
                    throw response
                }
                const breweryData = await response.json()
                dispatch(setBreweries(breweryData))
        }catch(data){
            return {errors: data}
        }
    }
}

export const fetchBreweriesByCity = (props) => {

    return async dispatch => {
        try {
            dispatch({ type: 'LOADING_BREWERIES'})
                const response = await fetch(`https://api.openbrewerydb.org/breweries?by_city=${props}&per_page=30`)
                if (!response.ok) {
                    throw response
                }
                const breweryData = await response.json()
                dispatch(setBreweries(breweryData))
        }catch(data){
            return {errors: data}
        }
    }
}



