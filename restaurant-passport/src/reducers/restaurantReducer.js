export const initialState = {
    restaurant: {
        name: 'string',
        street: 'string',
        city: 'string',
        zip: 23453
    }
}


export const restaurantReducer = (state = initialState, action) => {
    console.log('restraurantReducter firing', state, action)
}