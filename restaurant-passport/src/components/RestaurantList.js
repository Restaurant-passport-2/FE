import React, {useState, UseEffect} from 'react';
import Restaurant from './Restaurant';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([])
return(
    <>
    <h1>My Passport</h1>
    <div>
        {restaurants.map(restaurant =>
            <Restaurant 
            key={restaurant.id}
            restaurant={restaurants}/>)}
    </div>
    </>
)
}

export default RestaurantList;