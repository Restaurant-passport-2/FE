import React, { useEffect, useState} from "react";
import axios from 'axios';
import { addRestaurant } from '../actions/actions';
import { connect } from "react-redux";

function AddRestaurantForm(props) {
    const [restaurantName, setRestaurantName] = React.useState({
        restaurantname: "",
        city: "",
        zipcode: "",
        streetaddress: "",
        phonenumber: "",
        website: "",
        myrating: "",
        notes: "",
        visited: "",  
      });
    
      const handleSubmit = (event) => {
        event.preventDefault();
        props.addRestaurant(restaurantName);
        /*
        axios.post("https://restaurant-passport-2.herokuapp.com/api/auth/login", restaurantName)
        .then(response =>{
            console.log(response)
    
        })
        .catch(err => {
            console.log(err)
        });
        */
      };
    
      const handleChange = (event) => {
        setRestaurantName({...restaurantName, [event.target.name]: event.target.value })
      };
    
      return (
        <div className="App">
          
          <form onSubmit={handleSubmit}>
              <legend>Add Restaurant</legend>
              <div className="inputContainer">
                <label htmlFor="restaurantname">Restaurant Name: </label>
                <input
                  required 
                  type="text"
                  name="restaurantname"
                  id="restaurantname"
                  placeholder="enter restaurant name here"
                  onChange={handleChange}
                  value={restaurantName.restaurantname}
                />
              </div>
          
              <div className="inputContainer">
                <label htmlFor="city">City: </label>
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
                <label htmlFor="zipcode">Zipcode: </label>
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
                <label htmlFor="streetaddress">Street Address: </label>
                <input
                  required 
                  type="text"
                  name="streetaddress"
                  id="streetaddress"
                  placeholder="enter address here"
                  onChange={handleChange}
                  value={restaurantName.streetaddress}
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="phonenumber">Phone Number: </label>
                <input
                  required 
                  type="text"
                  name="phonenumber"
                  id="phonenumber"
                  placeholder="enter phone number here"
                  onChange={handleChange}
                  value={restaurantName.phonenumber}
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="website">URL: </label>
                <input
                  required 
                  type="text"
                  name="website"
                  id="website"
                  placeholder="enter website here"
                  onChange={handleChange}
                  value={restaurantName.website}
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="myrating">My Rating: </label>
                <input
                  required 
                  type="text"
                  name="myrating"
                  id="myrating"
                  placeholder="enter 1-5 here"
                  onChange={handleChange}
                  value={restaurantName.myrating}
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="notes">Notes: </label>
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
                <label htmlFor="visited">Visited: </label>
                <input
                  required 
                  type="text"
                  name="visited"
                  id="visited"
                  placeholder=""
                  onChange={handleChange}
                  value={restaurantName.visited}
                />
              </div>

                <button role="submit">Submit Restaurant</button>
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
