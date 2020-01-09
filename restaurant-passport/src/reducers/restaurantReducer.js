import {  SIGNUP_USER_START,
        SIGNUP_USER_SUCCESS,
        SIGNUP_USER_FAILURE,
        
        LOGIN_USER_START,
        LOGIN_USER_SUCCESS,
        LOGIN_USER_FAILURE,

        LOGOUT_USER_START,
        LOGOUT_USER_SUCCESS,
        LOGOUT_USER_FAILURE,

        ADD_RESTAURANT_START,
        ADD_RESTAURANT_SUCCESS,
        ADD_RESTAURANT_FAILURE,

        EDIT_RESTAURANT_START,
        EDIT_RESTAURANT_SUCCESS,
        EDIT_RESTAURANT_FAILURE,

        DELETE_RESTAURANT_START,
        DELETE_RESTAURANT_SUCCESS,
        DELETE_RESTAURANT_FAILURE

} from '../actions/actions';

const initialState = {
    username: '',
    email: '',
    city: '',
    zip: '',
    passport: [],
    name: '',
    isLoggedIn: false,
    isSigningUp: false,
    isLoggingIn: false,
    isLoggingOut: false,
    isAddingRestaurant: false,
    isEditingRestaurant: false,
    isDeletingRestaurant: false, 
    error: ''
}
    


const restaurantReducer = (state = initialState, action) => {
    console.log('restaurantReducer firing', state, action);
    switch( action.type) {
        case SIGNUP_USER_START:
            return { 
                ...state,
                isSigningUp: true
            };
        case SIGNUP_USER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                isSigningUp: false,
                username: action.payload.user.username,
                email: action.payload.user.email,
                city: action.payload.user.city,
                zip: action.payload.user.zipcode,
                passport: action.payload.user.passport,
                name: action.payload.user.name, 
                error: ''
            };
        case SIGNUP_USER_FAILURE:
            return {
                ...state,
                err: 'Signup User Failure',
                isSigningUp: false,
            };
        case LOGIN_USER_START:
            return {
                ...state,
                isLoggingIn: true
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                isLoggingIn: false,
                username: action.payload.user.username,
                email: action.payload.user.email,
                city: action.payload.user.city,
                zip: action.payload.user.zipcode,
                passport: action.payload.user.passport,
                name: action.payload.user.name, 
                error: ''
            };
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                isLoggingIn: false,
                error: 'Login User Failure'
            };
        case LOGOUT_USER_START:
            return {
                ...state,
                isLoggingOut: true,
            };
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: false,
                username: '',
                email: '',
                city: '',
                zip: '',
                passport: [],
                error: ''
            };
        case LOGOUT_USER_FAILURE:
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: true
            };
        case ADD_RESTAURANT_START:
            return {
                ...state,
                isAddingRestaurant: true
            };
        case ADD_RESTAURANT_SUCCESS:
            // TODO: add restaurant to passport in state OR get whole new passport from response, depending on API
            return {
                ...state,
                isAddingRestaurant: false,
                passport: action.payload,
                error: ''
            };
        case ADD_RESTAURANT_FAILURE:
            return {
                ...state,
                isAddingRestaurant: false,
                error: 'Adding Restaurant Failure'
            };
        case EDIT_RESTAURANT_START:
                return {
                    ...state,
                    isEditingRestaurant: true
                };
        case EDIT_RESTAURANT_SUCCESS:
            return {
                ...state,
                isEditingRestaurant: false,
                passport: action.payload,
                error: ''
            };
        case EDIT_RESTAURANT_FAILURE:
            return {
                ...state,
                isEditingRestaurant: false,
                error: action.payload
            };
        case DELETE_RESTAURANT_START:
                return {
                    ...state,
                    isDeletingRestaurant: true
                };
        case DELETE_RESTAURANT_SUCCESS:
            return {
                ...state,
                isDeletingRestaurant: false,
                passport: action.payload,
                error: ''
            };
        case DELETE_RESTAURANT_FAILURE:
            return {
                ...state,
                isDeletingRestaurant: false,
                error: action.payload
            };
        default:
            return state;
        }
}

export default restaurantReducer;