import axios from 'axios';

// export const ADD_ITEM = 'ADD_ITEM';
// export const REMOVE_ITEM = 'REMOVE_ITEM';

// export const addItem = (restaurant) => {
//     console.log(restaurant)
//     return{type:ADD_ITEM, payload: restaurant}
// }

export const SIGNUP_USER_START = 'SIGNUP_USER_START';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const LOGOUT_USER_START = 'LOGOUT_USER_START';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_FAILURE';

export const signupUser = (newUser) => dispatch => {
    dispatch( { type: SIGNUP_USER_START });
    axios
        .post("https://restaurant-passport-2.herokuapp.com/api/auth/signup", newUser)
        .then(res => {
            dispatch( { type: SIGNUP_USER_SUCCESS, payload: res.data.value});
            localStorage.setItem('token', response.data.token);
        })
        .catch(err => {
            dispatch( { type: SIGNUP_USER_FAILURE, payload: err.response});
        });
};

export const loginUser = (user) => dispatch => {
    axios
        .post("https://restaurant-passport-2.herokuapp.com/api/auth/login", user)
        .then(response =>{
            console.log(response)
            localStorage.setItem('token', response.data.token)
            dispatch( {type: LOGIN_USER_SUCCESS, payload: err.response });
        })
};