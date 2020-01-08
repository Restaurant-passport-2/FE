import React, { useState } from 'react';
import OrangeCheck from '../images/OrangeCheck.png';

import EditRestaurantForm from './EditRestaurantForm';

/*
const state = {
    restaurantName: 'Chilangos',
    streetAddress: '1835 Wildwood',
    city: 'Jackson',
    zip: '49201',
    phone: '(517)395-2940',
    website: 'wwww.chilangos.com',
    rating:'5',
    notes: `Best carnitas tacos Ive ever had!`,
    visited: true
}
*/
const Restaurant = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleClick = (e) => {
        console.log(`I've been clicked!`)
        setIsEditing(!isEditing);
        e.preventDefault()
    }
    return(
       
        <div className='restaurant-box'>
            <button onClick={handleClick}>{isEditing? 'Cancel Edit': 'Edit'}</button>
            {isEditing && <EditRestaurantForm />}
            <h3>{props.restaurant.restaurant.name}</h3>
            <p>{props.restaurant.restaurant.street_address} <br/>{props.restaurant.city} {props.restaurant.restaurant.zipcode}  </p>
            <p>{props.restaurant.phone_number}</p>
            <a href={props.restaurant.restaurant.website_url}>Visit our Website</a>
            <p>{props.restaurant.personal_rating}</p>
            <p>{props.restaurant.notes}</p>
            <form>
             <input type='checkbox'
            name='visited'
            value='visited'
            />Visited?
            </form>
            {props.restaurant.stamped && <div className='stamp-box'><img src={ OrangeCheck } alt='passport stamp' /></div>}
        </div>
       
                
           
           
         
           
    )
}



export default Restaurant;