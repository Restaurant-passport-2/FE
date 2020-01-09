import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

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

export const GET_RECOMMENDATIONS_START= 'GET_RECOMMENDATIONS_START';
export const GET_RECOMMENDATIONS_SUCCESS = 'GET_RECOMMENDATIONS_SUCCESS';
export const GET_RECOMMENDATIONS_FAILURE = 'GET_RECOMMENDATIONS_FAILURE';


export const signupUser = (newUser, history) => dispatch => {
    console.log('In signupUser in actions');
    dispatch( { type: SIGNUP_USER_START });
    axios
        .post("https://restaurant-passport-2.herokuapp.com/api/auth/signup", newUser)
        .then(response => {
            console.log(response);
            dispatch( { type: SIGNUP_USER_SUCCESS, payload: response.data});
            localStorage.setItem('token', response.data.token);
            history.push('/')
        })
        .catch(err => {
            dispatch( { type: SIGNUP_USER_FAILURE, payload: err.response});
        });
};

export const loginUser = (user, history) => dispatch => {
    dispatch( { type: LOGIN_USER_START });
    console.log('in loginUser in actions');
    axios
        .post("https://restaurant-passport-2.herokuapp.com/api/auth/login", user)
        .then(response =>{
            console.log('Login response from actions' ,history.push);
            localStorage.setItem('token', response.data.token);
            dispatch( {type: LOGIN_USER_SUCCESS, payload: response.data });
            history.push('/restaurants')
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
    console.log("Ready to be sent : ", restaurant);
    axiosWithAuth().post('https://restaurant-passport-2.herokuapp.com/api/passport/entry', restaurant)
    .then(response => {
        console.log("Here is the response after adding a restaurant", response);
        dispatch({type: ADD_RESTAURANT_SUCCESS, payload: response.data.entries})
    })
    .catch(err => {
        console.log('This is an error in add restaurant', err);
        dispatch({type: ADD_RESTAURANT_FAILURE, payload: err})
    })
    
};

export const editRestaurant = (restaurant) => dispatch => {
    dispatch( { type: EDIT_RESTAURANT_START});
    console.log('In editRestaurant in actions with restaurant of id ', restaurant.restaurant_id);
    axiosWithAuth().put(`https://restaurant-passport-2.herokuapp.com/api/passport/entry/${restaurant.restaurant_id}`, restaurant)
    .then(response => {
        console.log("Here is the response after editing a restaurant", response);
        dispatch({type: EDIT_RESTAURANT_SUCCESS, payload: response.data.entries})
    })
    .catch(err => {
        console.log('This is an error in edit restaurant: ', err);
        dispatch({type: EDIT_RESTAURANT_FAILURE, payload: err})
    });
};

export const deleteRestaurant = (restaurant) => dispatch => {
    dispatch( { type: DELETE_RESTAURANT_START});
    console.log('In deleteRestaurant in actions');
    axiosWithAuth().delete(`https://restaurant-passport-2.herokuapp.com/api/passport/entry/${restaurant.restaurant_id}`)
    .then(response => {
        console.log('delete action response', response)
        dispatch({type: DELETE_RESTAURANT_SUCCESS, payload: response.data.entries})
    })
    .catch(err => {
        console.log('delete action error', err)
        dispatch({type: DELETE_RESTAURANT_FAILURE, payload: err.message})
    })
};

export const getRecommendations = (city, zipcode) => dispatch => {
    dispatch( { type: GET_RECOMMENDATIONS_START});
    console.log('In getRecommendations in actions');
    axiosWithAuth()
        .get("https://restaurant-passport-2.herokuapp.com/api/restaurants/search", {
            params: {
                location: `${city}, ${zipcode}`,
                limit: 10,
                sort_by: "rating"
            },
        })
        .then(response => {
            console.log('get recommendations response', response);
            dispatch({type: GET_RECOMMENDATIONS_SUCCESS, payload: response.data.businesses})
        })
        .catch(err => {
            console.log('get recommendations error', err);
            dispatch({type: GET_RECOMMENDATIONS_FAILURE, payload: err.message})
        })
}