import { LOGIN_START, LOGIN_SUCCESS,LOGIN_FAILURE } from "./AuthTypes"



export const loginStart = (userCredentials) =>({ 
    type: LOGIN_START
})

export const loginSuccess = (user, accessToken) =>({ 
    type: LOGIN_SUCCESS,
    payload: {user, accessToken}
})

export const loginFailture = (error) =>({ 
    type: LOGIN_FAILURE,
    payload: error
})