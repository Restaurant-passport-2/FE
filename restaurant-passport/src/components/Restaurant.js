import React, { useState } from 'react';
import { connect } from "react-redux";

import OrangeCheck from '../images/OrangeCheck.png';
import LoveForkKnifeOrange from '../images/LoveForkKnifeOrange.png';

import { deleteRestaurant } from '../actions/actions';

import EditRestaurantForm from './EditRestaurantForm';

const Restaurant = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isVisited, setIsVisited] = useState(props.restaurant.stamped);

    const rows = [];
    for (let i=0; i < props.restaurant.personal_rating; i++) {
        rows.push(<div className='rating-icon-box' key={i}>
        <img src={LoveForkKnifeOrange} alt='rating_icon' />
    </div>);
    }

    const handleClick = () => {
        console.log(`Time to toggle editing!`);
        setIsEditing(!isEditing);
    }

    const startDelete = () => {
        console.log(`Time to delete ${props.restaurant.restaurant.name}`);
        //TODO: Change the parameter below to be whatever the back-end endpoint needs.
        props.deleteRestaurant(props.restaurant);
    }

    const handleCheckboxChange = () => {
        console.log(`Time to toggle the stamped status of ${props.restaurant.restaurant.name}`);
        setIsVisited(!isVisited);
        //TODO: Add functionality once the endpoint to do so is ready.
    }

    return(
       
        <div className='restaurant-box'>
            <button onClick={handleClick}>{isEditing? 'Cancel Edit': 'Edit'}</button>
            <button onClick={startDelete}>Delete</button>

            {isEditing && <EditRestaurantForm restaurant={props.restaurant} toggleEdit={handleClick}/>}
            <h3>{props.restaurant.restaurant.name}</h3>

            {isVisited && <div className='stamp-box'><img src={ OrangeCheck } alt='passport stamp' /></div>}
            <p>{props.restaurant.restaurant.street_address} <br/>{props.restaurant.city} {props.restaurant.restaurant.zipcode}  </p>
            <p>{props.restaurant.phone_number}</p>
            <a href={props.restaurant.restaurant.website_url}>Visit the Website</a>
            <p>My rating: {props.restaurant.personal_rating} hearts</p>
            
            <div className='rating-icon-row-box'>
                {rows}
            </div>
            <p>My notes: {props.restaurant.notes}</p>
            
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
            
        </div>
       
                
           
           
         
           
    )
}

const mapStateToProps = state => {
    return state;
  };
  
export default connect(
    mapStateToProps,
    { deleteRestaurant }
)(Restaurant);