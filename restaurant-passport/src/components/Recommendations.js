import React, { useState } from "react";
import { connect } from "react-redux";

import { getRecommendations} from '../actions/actions';
import { addRestaurant } from '../actions/actions';
import Loader from 'react-loader-spinner';
import LocationForm from './LocationForm';


import penBook from '../images/penBook.png';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const Recommendations = props => {
    //console.log('we are recommendation props', props);
    const [showLocationForm, setShowLocationForm ] = useState(false);

    const fetchRecommendations = () => {
        console.log('Time to fetch recommendations');
        const searchParams = {
            location: `${props.city}, ${props.zipcode}`,
            limit: 10,
            sort_by: "rating"
        }
        //props.getRecommendations(props.city, props.zipcode);
        props.getRecommendations(searchParams);
    }

    const addToPassport = (restaurant) => {
        console.log('Time to add a restaurant to passport');
        const formattedRestaurant = {
            "name": restaurant.name,
            "street_address": restaurant.location.address1,
            "city": restaurant.location.city,
            "state": restaurant.location.state,
            "zipcode": restaurant.location.zip_code,
            "phone_number": restaurant.display_phone,
            "website_url": restaurant.url,
            "stamped": false,
            "personal_rating": 3,
            "notes": "Added this recommendation to my passport"
        }
        props.addRestaurant(formattedRestaurant);
        const box = document.getElementById(`${restaurant.id}-box`);
        const imgNode = document.createElement('img');
        imgNode.src=penBook;
        imgNode.alt='book with pen';
        imgNode.style.width = '3rem';
        imgNode.style.marginTop= '1rem';
        box.prepend(imgNode);
        const addButton = document.getElementById(`${restaurant.id}-button`);
        addButton.style.display = 'none';
        
    }

    const startLocationSearch = () => {
        setShowLocationForm(!showLocationForm);
    }
    
    return (
        <div>
            <h1>My Recommendations</h1>
            {!props.recommendations && <button onClick={fetchRecommendations}>See Restaurants In My Area</button>}
            <button onClick={startLocationSearch}>
                {!showLocationForm? 'See Restaurants In a Different Area': 'End Search By Location'}
            </button>
            {(props.isGettingRecommendations && <Loader type="ThreeDots" color="#44BF9C" height={80} width={80} />)}
            
            {showLocationForm && <LocationForm />}
            
            <div className='recommendations'>
            {props.recommendations && props.recommendations.map(restaurant => {

                return (
                    
                    <div id={`${restaurant.id}-box`} key={restaurant.id} className='recommendation-box'>
                        <h2>{restaurant.name}</h2>
                        <p>{restaurant.location.address1}</p>
                        <p>{restaurant.location.city}, {restaurant.location.state} {restaurant.location.zip_code}</p>
                        <p>{restaurant.display_phone}</p>
                        <a href={restaurant.url}>Visit Website</a>
            
                        <p><span className="rating">Rating: </span> {restaurant.rating}</p> 
                        <p><span className='pricing'>Price: </span> {restaurant.price}</p>
                        <p><span className='type'>Type(s): </span></p>
                        {restaurant.categories.map(category => <p key={category.title}>{category.title}</p>)}
                        <div className='yelp-img-box'>
                            <img src={restaurant.image_url} alt='from yelp' />
                        </div>
                        <button id={`${restaurant.id}-button`} onClick={() => addToPassport(restaurant)}>Add to My Passport</button>
                        
                    </div>
                    
                )
            })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
        city: state.city,
        zipcode: state.zip,
        recommendations: state.recommendations
    };
};

export default connect(
    mapStateToProps,
    {getRecommendations, addRestaurant }
  )(Recommendations);