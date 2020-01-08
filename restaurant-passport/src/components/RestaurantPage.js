import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";

import { deleteRestaurant } from '../actions/actions';


import OrangeCheck from '../images/OrangeCheck.png';
import LoveForkKnifeOrange from '../images/LoveForkKnifeOrange.png';

import EditRestaurantForm from './EditRestaurantForm';


const RestaurantPage = (props) => {
    console.log('Restaurant page props', props)

    const [currentRestaurant, setCurrentRestaurant]= useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isVisited, setIsVisited] = useState(false);

    const id = props.match.params.restaurantId;
    //console.log('this is ID', id)

    useEffect(()=> {
        let winner =  props.passport.filter(restaurant => ( Number(restaurant.restaurant_id) === Number(id))  
        )
        setCurrentRestaurant(winner[0]);
    },[id, props.passport])

    useEffect(() => {
        if (currentRestaurant) {setIsVisited(currentRestaurant.stamped)};
    }, [currentRestaurant])

   console.log('This is your current restaurant',currentRestaurant)


   const handleClick = () => {
    console.log(`Time to toggle editing!`);
    setIsEditing(!isEditing);
}

const startDelete = () => {
    console.log(`Time to delete ${currentRestaurant.restaurant.name}`);
    props.deleteRestaurant(currentRestaurant);
    props.history.push('/restaurants');
}

const handleCheckboxChange = () => {
    //console.log(`Time to toggle the stamped status of ${currentRestaurant.restaurant.name}`);
    setIsVisited(!isVisited);
    //TODO: Add functionality once the endpoint to do so is ready.
}
    
   const rows = [];
   if (currentRestaurant){ for (let i=0; i < currentRestaurant.personal_rating; i++) {
       rows.push(<div className='rating-icon-box' key={i}>
       <img src={LoveForkKnifeOrange} alt='rating_icon' />
   </div>);
   }}

    return (
        
        
        <div>
            {console.log('currentRestaurant',currentRestaurant)}
        
        {currentRestaurant && <h2>{currentRestaurant.name}</h2>}
        {currentRestaurant && <p>{currentRestaurant.street_address}</p>}
        {currentRestaurant && <p>{currentRestaurant.city}, {currentRestaurant.state} {currentRestaurant.zipcode}</p>}
        {currentRestaurant && <p>{currentRestaurant.phone_number} </p>}
        {currentRestaurant && <p>Rating: {currentRestaurant.personal_rating}</p>}
        <div className='rating-icon-row-box'>
                    {rows}
                </div>
        {currentRestaurant && <p>Notes: {currentRestaurant.notes}</p>}
        {isVisited && <div className='stamp-box'><img src={ OrangeCheck } alt='passport stamp' /></div>}
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
        <button onClick={handleClick}>{isEditing? 'Cancel Edit': 'Edit'}</button>
        {isEditing && currentRestaurant && <EditRestaurantForm restaurant={currentRestaurant} toggleEdit={handleClick}/>}
            <button onClick={startDelete}>Delete</button>
        </div>
    )

}

const mapStateToProps = state => {
    return{ ...state, passport: state.passport};
  };
  
export default connect(
    mapStateToProps,
    { deleteRestaurant }
)(RestaurantPage);