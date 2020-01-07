export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const addItem = (restaurant) => {
    console.log(restaurant)
    return{type:ADD_ITEM, payload: restaurant}
}