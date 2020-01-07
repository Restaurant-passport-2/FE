export const initialState = {
    user: {
        username: '',
        email: '',
        city: '',
        zip: '',
        passport: [],
        isLoggedIn: false,
    },
    
}


export const restaurantReducer = (state = initialState, action) => {
    console.log('restraurantReducter firing', state, action)
}