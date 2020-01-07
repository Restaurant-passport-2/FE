import React from 'react';

import {EditRestaurantForm} from './EditRestaurantForm';

const state = {
    restaurantName: '',
    streetAddress: '',
    city: '',
    zip: '',
    phone: '',
    website: '',
    rating:'',
    notes: ''
}
const Restaurant = () => {
    const handleClick = () => {
        console.log(`I've been clicked!`)
    }
    return(
        <div>
            <button onClick={handleClick}>Edit</button>
            <h3>{state.restaurantName}</h3>
            <p>{state.streetAddress} <br/>{state.city} {state.zip}  </p>
            <p>{state.phone}</p>
            <a href={state.website}>Visit our Website</a>
            <p>{state.rating}</p>
            <p>{state.notes}</p>
        </div>
    )
}



export default Restaurant;