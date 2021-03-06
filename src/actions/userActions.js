import { 
    SET_USER,
    CLEAR_USER,
    ADD_ERRORS,
    CLEAR_ERRORS,
    } from '../actionTypes/index'

import { getToken } from './loginActions'

// 'http://localhost:3000'
// 'https://craft-brew-backend.herokuapp.com'

const thisURL = 'https://craft-brew-backend.herokuapp.com'


//State altering actions
export function setUser(userObj){
    return {
        type: SET_USER, 
        payload: userObj
    }
}

export function clearUser(){
    return {
        type: CLEAR_USER
    }
}

export function setErrors(errObj) {
    return {
        type: ADD_ERRORS,
        payload: errObj
    }
}

export function clearErrors() {
    return {
        type: CLEAR_ERRORS
    }
}

// Get current user on app load or refresh
export const getUser = () => {
    return async function (dispatch) {
        try{
            const res = await fetch(`${thisURL}/api/v1/user`, {
                credentials: 'include'
            })
            if(!res.ok){
                throw res
            }
            
            const userObj = await res.json()
            if (userObj.errors) {
                dispatch(setErrors(userObj))
            }else {
                dispatch(setUser(userObj)) 
            }
            
        }catch(data){
            console.log( data)
        }
    }
}

// Logout user and get a fresh token
export const logOutUser = (token) => {
    return async function (dispatch) {
        try{
           await fetch(`${thisURL}/api/v1/logout`, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': token
                }
            })
            dispatch(clearUser())
            dispatch(getToken())
        }catch(data){
            console.log(data)
        }
    }
}
