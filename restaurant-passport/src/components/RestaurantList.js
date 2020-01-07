import React, {useState, UseEffect} from 'react';
import Restaurant from './Restaurant';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import AddRestaurantForm from './AddRestaurantForm';

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([])
return(
    <>
    <h1>My Passport</h1>
    <AddRestaurantForm />
    <div>
        {/* {restaurants.map(restaurant =>
            <Restaurant 
            key={restaurant.id}
            restaurant={restaurants}/>)} */}
            <Restaurant/>
    </div>
    </>
)
}

export default RestaurantList;