import {  SIGNUP_USER_START,
        SIGNUP_USER_SUCCESS,
        SIGNUP_USER_FAILURE,
        
        LOGIN_USER_START,
        LOGIN_USER_SUCCESS,
        LOGIN_USER_FAILURE,

        LOGOUT_USER_START,
        LOGOUT_USER_SUCCESS,
        LOGOUT_USER_FAILURE
} from '../actions/actions';

const initialState = {
    user: {
        username: '',
        email: '',
        city: '',
        zip: '',
        passport: [],
        isLoggedIn: false,
        isSigningUp: false,
        isLoggingIn: false, 
        error: ''
    },
    
}


const restaurantReducer = (state = initialState, action) => {
    console.log('restraurantReducter firing', state, action);
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
                zip: action.payload.user.zip,
                passport: action.payload.user.passport
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
                zip: action.payload.user.zip,
                passport: action.payload.user.passport
            };
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                isLoggingIn: false,
                error: 'Login User Failure'
            };
        default:
            return state;
        }
}

export default restaurantReducer;