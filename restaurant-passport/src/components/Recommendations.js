import React from "react";
import { connect } from "react-redux";

import { getRecommendations} from '../actions/actions';

const Recommendations = props => {

    const fetchRecommendations = () => {
        console.log('Time to fetch recommendations');
        props.getRecommendations(props.city, props.zipcode);
    }
    return (
        <div>
            <h1>My Recommendations</h1>
            {!props.recommendations && <button onClick={fetchRecommendations}>See Restaurants In My Area</button>}
            {props.recommendations && props.recommendations.map(restaurant => {
                return (
                    <div key={restaurant.id}>
                        <h2>{restaurant.name}</h2>
                        <p>{restaurant.location.address1}</p>
                        <p>{restaurant.location.city}, {restaurant.location.state} {restaurant.location.zip_code}</p>
                        <p>{restaurant.display_phone}</p>
                        <a href={restaurant.url}>Visit Website</a>
                        <p>Rating: {restaurant.rating}</p>
                        <p>Price: {restaurant.price}</p>
                        <p>Type(s):</p>
                        {restaurant.categories.map(category => <p key={category.title}>{category.title}</p>)}
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
    {getRecommendations }
  )(Recommendations);