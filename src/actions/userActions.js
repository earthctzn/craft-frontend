export function setUser(userObj){
    return {
        type: 'SET_USER', 
        payload: userObj
    }
}

export function clearUser(){
    return {
        type: 'CLEAR_USER'
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
            if (userObj)
            dispatch(setUser(userObj))
        }catch(data){
            console.log(data)
        }
    }
}

export const signupUser =  async (token, user) => {
   return async function (dispatch) {
       try{
            const headers = new Headers();

            headers.append('Content-Type', 'application/json')
            headers.append('Accepts', 'application/json')
            headers.append('X-CSRF-Token', token)
        
            const formData = {user: {
                username: user.username,
                email: user.email,
                password: user.password,
                password_confirmation: user.password_confirmation 
            }};
        
            const options = {
                method: 'POST',
                headers,
                body: JSON.stringify(formData),
                credentials: 'include'
            };
        
            
            const response = await fetch('http://localhost:3000/api/v1/signup', options)
            const dataObj = await response.json();
            if (dataObj.errors){
                dispatch(setErrors(dataObj))
            }else{
                dispatch(setUser(dataObj))
            }
       }catch(err){
           console.log(err)
       }
   }   
};


export const logOutUser = (token) => {
    return async function (dispatch) {
        try{
           await fetch('http://localhost:3000/api/v1/logout', {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': token
                }
            })
            dispatch(clearUser())
            

        }catch(err){
            console.log(err)
        }
    }
}
