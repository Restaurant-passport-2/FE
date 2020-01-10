import React, { useState } from "react";
//import axios from 'axios';
import { addRestaurant } from '../actions/actions';
import { connect } from "react-redux";

import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function AddRestaurantForm(props) {
    const [restaurantName, setRestaurantName] = useState({
        name: "",
        city: "",
        zipcode: "",
        street_address: "",
        phone_number: "",
        website_url: "",
        personal_rating: "",
        notes: "",
        stamped: false,  
      });
    
      const handleSubmit = (event) => {
        //console.log("This is our restaurant object", restaurantName);
        event.preventDefault();
        props.addRestaurant(restaurantName);
        props.toggleAdd();
      };
    
      const handleChange = (event) => {
        const value = event.target.type === 'checkbox'? event.target.checked : event.target.value;
        setRestaurantName({...restaurantName, [event.target.name]: value })
      };
    
      return (
        <div className="App">
          
          <form onSubmit={handleSubmit}>
              <legend>Add Restaurant</legend>
              <div className="inputContainer">
                <label htmlFor="name">* Restaurant Name: </label>
                <input
                  required 
                  type="text"
                  name="name"
                  id="name"
                  placeholder="enter restaurant name here"
                  onChange={handleChange}
                  value={restaurantName.name}
                />
              </div>
          
              <div className="inputContainer">
                <label htmlFor="city">* City: </label>
                  <input
                    required 
                    type="text"
                    name="city"
                    id="city"
                    placeholder="enter city here"
                    onChange={handleChange}
                    value={restaurantName.city}
                  />
                </div>

              <div className="inputContainer">
                <label htmlFor="state">* State: </label>
                  <input
                    required 
                    type="text"
                    name="state"
                    id="state"
                    placeholder="enter state here"
                    onChange={handleChange}
                    value={restaurantName.state}
                  />
                </div>

                <div className="inputContainer">
                <label htmlFor="zipcode">* Zipcode: </label>
                <input
                  required 
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  placeholder="enter zipcode here"
                  onChange={handleChange}
                  value={restaurantName.zipcode}
                />
              </div>


              <div className="inputContainer">
                <label htmlFor="street_address">* Street Address: </label>
                <input
                  required 
                  type="text"
                  name="street_address"
                  id="street_address"
                  placeholder="enter address here"
                  onChange={handleChange}
                  value={restaurantName.street_address}
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="phone_number">Phone Number: </label>
                <input 
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  placeholder="enter phone number here"
                  onChange={handleChange}
                  value={restaurantName.phone_number}
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="website_url">URL: </label>
                <input
                  type="text"
                  name="website_url"
                  id="website_url"
                  placeholder="enter website here"
                  onChange={handleChange}
                  value={restaurantName.website_url}
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="personal_rating">My Rating: </label>
                <input
                  type="text"
                  name="personal_rating"
                  id="personal_rating"
                  placeholder="enter 1-5 here"
                  onChange={handleChange}
                  value={restaurantName.personal_rating}
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="notes">* Notes: </label>
                <input
                  required 
                  type="text"
                  name="notes"
                  id="notes"
                  placeholder="notes"
                  onChange={handleChange}
                  value={restaurantName.notes}
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="stamped">Visited? </label>
                <input
                  type="checkbox"
                  name="stamped"
                  id="stamped"
                  onChange={handleChange}
                  value={restaurantName.stamped}
                />
              </div>

                <button type="submit">Submit Restaurant</button>
        {(props.isAddingRestaurant && <Loader type="ThreeDots" color="white" height={80} width={80} />)}

            </form>
       
        </div>
      );
      }

  const mapStateToProps = state => {
    return state;
  };
  
  export default connect(
    mapStateToProps,
    { addRestaurant }
  )(AddRestaurantForm);

//     const [restaurantName, setRestaurantName] = React.useState([{}])


// return (
//     <div className="App">
//         <h1>New Restaurant</h1>
//         <NewRestaurantForm
//         restaurantName={restaurantName}
//         setRestaurantName={setRestaurantName}
//         />

//         <RestaurantName
//         restaurantName={restaurantName}
//         />
//     </div>
// );
// }

// function NewRestaurantForm(props) {
//     const [newRestaurant, setNewRestaurant] = React.useState({
//         restaurantname: "",
//         city: "",
//         zipcode: "",
//         streetaddress: "",
//         phonenumber: "",
//         website: "",
//         myrating: "",
//         notes: "",
//         visited: "",
//     })

//     const handleSubmit = (event) => {
//         event.preventDefault
//     }
//
