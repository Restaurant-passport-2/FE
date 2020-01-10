import React, { useState } from 'react';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

import OrangeCheck from '../images/OrangeCheck.png';
import LoveForkKnifeOrange from '../images/LoveForkKnifeOrange.png';

import { deleteRestaurant } from '../actions/actions';


const Restaurant = (props) => {
    // console.log('restaurant props', props)
    const [isVisited, setIsVisited] = useState(props.restaurant.stamped);

    const rows = [];
    for (let i=0; i < props.restaurant.personal_rating; i++) {
        rows.push(<div className='rating-icon-box' key={i}>
        <img src={LoveForkKnifeOrange} alt='rating_icon' />
    </div>);
    }

    return(
       
        <div className='restaurant-box'>
            
            <Link to={`/restaurants/${props.restaurant.restaurant_id}`}>
            <h3>{props.restaurant.name}</h3>
            </Link>
            {isVisited && <div className='stamp-box'><img src={ OrangeCheck } alt='passport stamp' /></div>}
            <p>{props.restaurant.street_address} <br/>{props.restaurant.city} {props.restaurant.zipcode}  </p>
            <p>{props.restaurant.phone_number}</p>
            <a href={props.restaurant.website_url}>Visit the Website</a>
            <p>My rating: {props.restaurant.personal_rating} hearts</p>
            
            <div className='rating-icon-row-box'>
                {rows}
            </div>
            <p>My notes: {props.restaurant.notes}</p>
            
          
              
            
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