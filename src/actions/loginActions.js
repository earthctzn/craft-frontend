import { setErrors, setUser } from "./userActions";


export const loginUser = (csrf_token, user) => {
    return async function (dispatch) {
        try{
            const formData = { user: {
                email: user.email,
                password: user.password
            }};
            // `https://craft-brew-backend.herokuapp.com/api/v1/login`
            // `http://localhost:3000/api/v1/login`
            const response = await fetch(`https://craft-brew-backend.herokuapp.com/api/v1/login`,{
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
            const userObj = await response.json()
            if (userObj.errors) {
                dispatch(setErrors(userObj))
            }else{
                dispatch(setUser(userObj))
            }

        } catch(data) {
           console.log(data.statusText)
        };
    }
};

// `https://craft-brew-backend.herokuapp.com/api/v1/auth`
// `http://localhost:3000/api/v1/auth`
export const getToken = () => {
    return async function (dispatch) {
        try{
            const res = await fetch(`https://craft-brew-backend.herokuapp.com/api/v1/auth`, {credentials: 'include'})
            if(!res.ok){
                throw res
            }
            const response = await res.json()
            const csrf_token = response.csrf_auth_token
            dispatch({
                type: 'SET_TOKEN',
                payload: csrf_token
            })
        }catch(data){
            console.log(data.statusText)
        }
    }
}

