import React, {useState, UseEffect} from 'react';
import Restaurant from './Restaurant';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import AddRestaurantForm from './AddRestaurantForm';

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([])

    const [addingRest, setAddingRest] = useState(false)

    const handleButton = (e) => {
        e.preventDefault();
        setAddingRest(!addingRest)
    }
return(
    <>
    <h1>My Passport</h1>
    <button onClick={handleButton}>{addingRest ? 'Cancel add': ' Add Restaurant' }</button>
   {addingRest &&  <AddRestaurantForm />}
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