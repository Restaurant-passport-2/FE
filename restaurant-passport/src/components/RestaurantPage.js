import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";

import { deleteRestaurant } from '../actions/actions';


import OrangeCheck from '../images/OrangeCheck.png';
import LoveForkKnifeOrange from '../images/LoveForkKnifeOrange.png';

import EditRestaurantForm from './EditRestaurantForm';


const RestaurantPage = (props) => {
    console.log('Restaurant page props', props)

    const [currentRestaurant, setCurrentRestaurant]= useState(null);

    const id = props.match.params.restaurantId;
    //console.log('this is ID', id)

    useEffect(()=> {
        let winner =  props.passport.filter(restaurant => ( Number(restaurant.restaurant_id) === Number(id))  
        )
        setCurrentRestaurant(winner[0]);
    },[id])

   console.log('This is your current restaurant',currentRestaurant)
    
    return (
        
        <div>
            {console.log('currentRestaurant',currentRestaurant)}
        <h3>Restaurant Page {id} under construction...</h3>
        {currentRestaurant && <h3>Name: {currentRestaurant.restaurant.name}</h3>}
        {currentRestaurant && <p>City: {currentRestaurant.city}</p>}
        {currentRestaurant && <p>Notes: {currentRestaurant.notes}</p>}
        {currentRestaurant && <p>Rating: {currentRestaurant.personal_rating}</p>}
        </div>
    )
    
    /*
    const [isEditing, setIsEditing] = useState(false);
    const [isVisited, setIsVisited] = useState(currentRestaurant.stamped);

    const rows = [];
    for (let i=0; i < currentRestaurant.personal_rating; i++) {
        rows.push(<div className='rating-icon-box' key={i}>
        <img src={LoveForkKnifeOrange} alt='rating_icon' />
    </div>);
    }

    const handleClick = () => {
        console.log(`Time to toggle editing!`);
        setIsEditing(!isEditing);
    }

    const startDelete = () => {
        console.log(`Time to delete ${currentRestaurant.restaurant.name}`);
        //TODO: Change the parameter below to be whatever the back-end endpoint needs.
        props.deleteRestaurant(currentRestaurant);
    }

    const handleCheckboxChange = () => {
        //console.log(`Time to toggle the stamped status of ${currentRestaurant.restaurant.name}`);
        setIsVisited(!isVisited);
        //TODO: Add functionality once the endpoint to do so is ready.
    }

    return(
       
        <div className='restaurant-box'>
            <button onClick={handleClick}>{isEditing? 'Cancel Edit': 'Edit'}</button>
            <button onClick={startDelete}>Delete</button>

            
            {isEditing && currentRestaurant && <EditRestaurantForm restaurant={currentRestaurant} toggleEdit={handleClick}/>}
            {currentRestaurant && <h3>{currentRestaurant.city}</h3>}
            
            
        </div>     
    )
    */

}

const mapStateToProps = state => {
    return{ ...state, passport: state.passport};
  };
  
export default connect(
    mapStateToProps,
    { deleteRestaurant }
)(RestaurantPage);

/*

            {isVisited && <div className='stamp-box'><img src={ OrangeCheck } alt='passport stamp' /></div>}
            
            {currentRestaurant && <div>
                <p>{currentRestaurant.restaurant.street_address} <br/>{props.restaurant.city} {props.restaurant.restaurant.zipcode}  </p>
                <p>{currentRestaurant.phone_number}</p>
                <a href={currentRestaurant.restaurant.website_url}>Visit the Website</a>
                <p>My rating: {currentRestaurant.personal_rating} hearts</p>
                
                <div className='rating-icon-row-box'>
                    {rows}
                </div>
                <p>My notes: {currentRestaurant.notes}</p>
            </div>
            
            }

            <form className='visited-form'>
                <div className='inputContainer'>
                <label htmlFor='visited'>Visited? </label>
                <input type='checkbox'
                    name='visited'
                    value={isVisited}
                    onChange={handleCheckboxChange}
                    id='visited'
                    checked={isVisited? 'checked': null}
                />
                
                </div>
            </form>   
            */