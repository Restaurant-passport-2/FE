import React, { useState } from 'react';
import OrangeCheck from '../images/OrangeCheck.png';

import EditRestaurantForm from './EditRestaurantForm';

const Restaurant = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleClick = () => {
        console.log(`Time to toggle editing!`);
        setIsEditing(!isEditing);
    }
    return(
       
        <div className='restaurant-box'>
            <button onClick={handleClick}>{isEditing? 'Cancel Edit': 'Edit'}</button>
            {isEditing && <EditRestaurantForm restaurant={props.restaurant} toggleEdit={handleClick}/>}
            <h3>{props.restaurant.restaurant.name}</h3>
            <p>{props.restaurant.restaurant.street_address} <br/>{props.restaurant.city} {props.restaurant.restaurant.zipcode}  </p>
            <p>{props.restaurant.phone_number}</p>
            <a href={props.restaurant.restaurant.website_url}>Visit the Website</a>
            <p>My rating: {props.restaurant.personal_rating}</p>
            <p>My notes: {props.restaurant.notes}</p>
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