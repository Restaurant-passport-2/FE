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
export const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE';

export const ADD_RESTAURANT_START = 'ADD_RESTAURANT_START';
export const ADD_RESTAURANT_SUCCESS = 'ADD_RESTAURANT_SUCCESS';
export const ADD_RESTAURANT_FAILURE = 'ADD_RESTAURANT_FAILURE';

export const EDIT_RESTAURANT_START = 'EDIT_RESTAURANT_START';
export const EDIT_RESTAURANT_SUCCESS = 'EDIT_RESTAURANT_SUCCESS';
export const EDIT_RESTAURANT_FAILURE = 'EDIT_RESTAURANT_FAILURE';

export const DELETE_RESTAURANT_START = 'DELETE_RESTAURANT_START';
export const DELETE_RESTAURANT_SUCCESS = 'DELETE_RESTAURANT_SUCCESS';
export const DELETE_RESTAURANT_FAILURE = 'DELETE_RESTAURANT_FAILURE';


export const signupUser = (newUser) => dispatch => {
    console.log('In signupUser in actions');
    dispatch( { type: SIGNUP_USER_START });
    axios
        .post("https://restaurant-passport-2.herokuapp.com/api/auth/signup", newUser)
        .then(response => {
            console.log(response);
            dispatch( { type: SIGNUP_USER_SUCCESS, payload: response.data});
            localStorage.setItem('token', response.data.token);
        })
        .catch(err => {
            dispatch( { type: SIGNUP_USER_FAILURE, payload: err.response});
        });
};

export const loginUser = (user) => dispatch => {
    dispatch( { type: LOGIN_USER_START });
    console.log('in loginUser in actions');
    axios
        .post("https://restaurant-passport-2.herokuapp.com/api/auth/login", user)
        .then(response =>{
            console.log(response);
            localStorage.setItem('token', response.data.token);
            dispatch( {type: LOGIN_USER_SUCCESS, payload: response.data });
        })
        .catch(err => {
            dispatch( { type: LOGIN_USER_FAILURE, payload: err.response});
        });
};

export const logoutUser = () => dispatch => {
    dispatch( { type: LOGOUT_USER_START});
    localStorage.removeItem('token');
    const tokenCheck = localStorage.getItem('token');
    if  (tokenCheck === null) {
        dispatch( { type: LOGOUT_USER_SUCCESS});
    } else {
        dispatch ( { type: LOGOUT_USER_FAILURE});
    };
};

export const addRestaurant = (restaurant) => dispatch => {
    dispatch( { type: ADD_RESTAURANT_START});
    //more to come
};

export const editRestaurant = (restaurant) => dispatch => {
    dispatch( { type: EDIT_RESTAURANT_START});
    //more to come
};

export const deleteRestaurant = (restaurant) => dispatch => {
    dispatch( { type: DELETE_RESTAURANT_START});
    //more to come
};