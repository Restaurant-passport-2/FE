import React from 'react';
import OrangeCheck from '../images/OrangeCheck.png';

import {EditRestaurantForm} from './EditRestaurantForm';

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
const Restaurant = () => {
    const handleClick = (e) => {
        console.log(`I've been clicked!`)
        e.preventDefault()
    }
    return(
       
        <div className='restaurant-box'>
            <button onClick={handleClick}>Edit</button>
            <h3>{state.restaurantName}</h3>
            <p>{state.streetAddress} <br/>{state.city} {state.zip}  </p>
            <p>{state.phone}</p>
            <a href={state.website}>Visit our Website</a>
            <p>{state.rating}</p>
            <p>{state.notes}</p>
            <form>
             <input type='checkbox'
            name='visited'
            value='visited'
            />Visited?
            </form>
            {state.visited && <div className='stamp-box'><img src={ OrangeCheck } alt='passport stamp' /></div>}
        </div>
       
                
           
           
         
           
    )
}



export default Restaurant;