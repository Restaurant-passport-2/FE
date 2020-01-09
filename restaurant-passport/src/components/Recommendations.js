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
            <button onClick={fetchRecommendations}>See Restaurants In My Area</button>
            {props.recommendations && props.recommendations.map(restaurant => <h2>{restaurant.name}</h2>)}
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