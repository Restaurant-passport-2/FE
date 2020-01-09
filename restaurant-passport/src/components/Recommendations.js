import React from "react";
import { connect } from "react-redux";

import { getRecommendations} from '../actions/actions';
import { addRestaurant } from '../actions/actions';

import penBook from '../images/penBook.png';

const Recommendations = props => {

    const fetchRecommendations = () => {
        console.log('Time to fetch recommendations');
        props.getRecommendations(props.city, props.zipcode);
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
        box.append(imgNode);
        const addButton = document.getElementById(`${restaurant.id}-button`);
        addButton.style.display = 'none';
        
    }

    return (
        <div>
            <h1>My Recommendations</h1>
            {!props.recommendations && <button onClick={fetchRecommendations}>See Restaurants In My Area</button>}
            {props.recommendations && props.recommendations.map(restaurant => {
                return (
                    <div id={`${restaurant.id}-box`} key={restaurant.id}>
                        <h2>{restaurant.name}</h2>
                        <p>{restaurant.location.address1}</p>
                        <p>{restaurant.location.city}, {restaurant.location.state} {restaurant.location.zip_code}</p>
                        <p>{restaurant.display_phone}</p>
                        <a href={restaurant.url}>Visit Website</a>
                        <p>Rating: {restaurant.rating}</p>
                        <p>Price: {restaurant.price}</p>
                        <p>Type(s):</p>
                        {restaurant.categories.map(category => <p key={category.title}>{category.title}</p>)}
                        <div className='yelp-img-box'>
                            <img src={restaurant.image_url} alt='from yelp' />
                        </div>
                        <button id={`${restaurant.id}-button`} onClick={() => addToPassport(restaurant)}>Add to My Passport</button>
                        <hr />
                    </div>
                )
            })}
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