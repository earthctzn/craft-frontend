export function setUser(userObj){
    return {
        type: 'SET_USER', 
        payload: userObj
    }
}

export function setErrors(errObj) {
    return {
        type: 'ADD_ERRORS',
        payload: errObj
    }
}

export function clearErrors() {
    return {
        type: 'CLEAR_ERRORS'
    }
}


export const getUser = () => {
    return async function (dispatch) {
        try{
            const res = await fetch('http://localhost:3000/api/v1/user', {
                credentials: 'include'
            })
            if(!res.ok){
                throw res
            }
            const userObj = await res.json()
            dispatch(setUser(userObj))
        }catch(data){
            console.log(data)
        }
    }
}
