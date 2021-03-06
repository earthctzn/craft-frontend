import { 
    ADD_BREWERIES,
    SELECTED_BREWERY,
    LOADING_BREWERIES,

} from '../actionTypes'
// 'https://craft-brew-backend.herokuapp.com'
// 'http://localhost3000'

const thisURL = 'https://craft-brew-backend.herokuapp.com'

const setBreweries = ( breweries ) => {
    return { type: ADD_BREWERIES, payload: breweries }
}

const setSelectedBrewery = brewery => {
    return {
        type: SELECTED_BREWERY, payload: brewery
    }
}

const loadingBreweries = () => {
    return { type: LOADING_BREWERIES }
}

// Breweries from external api
export const fetchBreweries = () => {

    return async dispatch => {
        try {
            dispatch(loadingBreweries())
                const response = await fetch('https://api.openbrewerydb.org/breweries?&per_page=32')
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

// Find or create the selected brewry
export const fetchSelectedBrewery = (csrf_token, brewery) => {
    
    return async dispatch => {
        try {
            dispatch(loadingBreweries())
                const formData = {
                    brewery: brewery
                }

                const response = await fetch(`${thisURL}/api/v1/brewery`,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-Token': csrf_token
                    },
                    body: JSON.stringify(formData),
                    credentials: 'include'

                })
                if (!response.ok) {
                    throw response
                }
                const breweryData = await response.json()
                dispatch(setSelectedBrewery(breweryData))
        }catch(data){
            return {errors: data}
        }
    }
}


// By browser geolocation
export const fetchBreweriesByCity = (props) => {

    return async dispatch => {
        try {
            dispatch(loadingBreweries())
                const response = await fetch(`https://api.openbrewerydb.org/breweries?by_city=${props}&per_page=32`)
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



