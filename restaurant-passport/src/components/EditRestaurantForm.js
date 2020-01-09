import React, { useState } from "react";
import { connect } from 'react-redux';
import { editRestaurant } from '../actions/actions';

function EditRestaurantForm(props) {
    const [restaurantName, setRestaurantName] = useState({
      name: props.restaurant.name,
      city: props.restaurant.city,
      zipcode: props.restaurant.zipcode,
      street_address: props.restaurant.street_address,
      phone_number: props.restaurant.phone_number,
      website_url: props.restaurant.phone_number,
      personal_rating: props.restaurant.personal_rating,
      notes: props.restaurant.notes,
      stamped: props.restaurant.stamped,
      restaurant_id: props.restaurant.restaurant_id   
      });
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Here is our edited restaurant, ready to submit: ', restaurantName);
        // TODO: change parameter if needed
        props.editRestaurant(restaurantName);
        props.toggleEdit();
      };
    
      const handleEdit = (event) => {
        const value = event.target.type === 'checkbox'? event.target.checked : event.target.value;
        setRestaurantName({...restaurantName, [event.target.name]: value });
      };
    
      return (
        <div className="edit-restaurant-box">
          
          <form onSubmit={handleSubmit}>
              <legend>Edit Restaurant</legend>
              <div className="inputContainer">
                <label htmlFor="name">Restaurant Name: </label>
                <input
                  required 
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleEdit}
                  value={restaurantName.name}
                />
              </div>
          
              <div className="inputContainer">
                <label htmlFor="city">City: </label>
                  <input
                    required 
                    type="text"
                    name="city"
                    id="city"
                    onChange={handleEdit}
                    value={restaurantName.city}
                  />
                </div>

                <div className="inputContainer">
                <label htmlFor="zipcode">Zipcode: </label>
                <input
                  required 
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  onChange={handleEdit}
                  value={restaurantName.zipcode}
                />
              </div>


              <div className="inputContainer">
                <label htmlFor="street_address">Street Address: </label>
                <input
                  required 
                  type="text"
                  name="street_address"
                  id="street_address"
                  onChange={handleEdit}
                  value={restaurantName.street_address}
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="phone_number">Phone Number: </label>
                <input
                   
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  onChange={handleEdit}
                  value={restaurantName.phone_number}
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="website_url">URL: </label>
                <input
                  
                  type="text"
                  name="website_url"
                  id="website_url"
                  onChange={handleEdit}
                  value={restaurantName.website_url}
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="personal_rating">My Rating: </label>
                <input
                   
                  type="text"
                  name="personal_rating"
                  id="personal_rating"
                  onChange={handleEdit}
                  value={restaurantName.personal_rating}
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="notes">Notes: </label>
                <input
                  required 
                  type="text"
                  name="notes"
                  id="notes"
                  onChange={handleEdit}
                  value={restaurantName.notes}
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="stamped">Visited?: </label>
                <input
                  type="checkbox"
                  name="stamped"
                  id="stamped"
                  checked={restaurantName.stamped? 'checked' : null}
                  onChange={handleEdit}
                  value={restaurantName.stamped}
                />
              </div>

                <button type="submit">Submit Edit</button>
            </form>
       
        </div>
      );

}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { editRestaurant }
)(EditRestaurantForm);