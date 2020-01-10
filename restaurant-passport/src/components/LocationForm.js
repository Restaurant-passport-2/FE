import React, { useState } from "react";
import { getRecommendations } from '../actions/actions';
import { connect } from "react-redux";

const LocationForm = props => {
    const [location, setLocation] = useState({"city": '', "zipcode": ''});

    const handleChange = e => {
        setLocation({...location, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        // console.log('Time to fetch recommendations based on location with ', `${location.city}, ${location.zipcode}`);
        const searchParams = {
            location: `${location.city}, ${location.zipcode}`,
            limit: 10,
            sort_by: "rating"
        }
        props.getRecommendations(searchParams);
    }

    return (
        <form onSubmit={handleSubmit}>
            <legend>Search By Location</legend>
            <div className="inputContainer">
                <label htmlFor="city">City: </label>
                <input
                  required 
                  type="text"
                  name="city"
                  id="city"
                  placeholder="enter city here"
                  onChange={handleChange}
                  value={location.city}
                />
            </div>
            <div className="inputContainer">
                <label htmlFor="city">Zipcode: </label>
                <input
                  required 
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  placeholder="enter zipcode here"
                  onChange={handleChange}
                  value={location.zipcode}
                />
            </div>
            <button type='submit'>Submit Location</button>
        </form>
    )
}

const mapStateToProps = state => {
    return state;
  };
  
export default connect(
    mapStateToProps,
    { getRecommendations }
  )(LocationForm);

