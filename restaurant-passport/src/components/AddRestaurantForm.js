import React, { useEffect, useState} from "react";
import axios from 'axios';

export default function AddRestaurant() {
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
        event.preventDefault()
        axios.post("https://restaurant-passport-2.herokuapp.com/api/auth/login", user)
        .then(response =>{
            console.log(response)
    
        })
        .catch(err => {
            console.log(err)
        });
      };
    
      const handleChange = (event) => {
        setRestaurantName({...restaurantName, [event.target.name]: event.target.value })
      };
    
      return (
        <div className="App">
          <h1>Access Your Passport</h1>
          <form onSubmit={handleSubmit}>
              <legend>Log In</legend>
              <div className="inputContainer">
                <label htmlFor="username">Username: </label>
                <input
                  required 
                  type="text"
                  name="restaurantname"
                  id="restaurantname"
                  placeholder="enter restaurant name here"
                  onChange={handleChange}
                  value={user.restaurantname}
                />
              </div>
          
              <div className="inputContainer">
                <label htmlFor="password">Password: </label>
                  <input
                    required 
                    type="text"
                    name="city"
                    id="city"
                    placeholder="enter city here"
                    onChange={handleChange}
                    value={user.city}
                  />
                </div>

                <div className="inputContainer">
                <label htmlFor="username">Username: </label>
                <input
                  required 
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  placeholder="enter zipcode here"
                  onChange={handleChange}
                  value={user.zipcode}
                />
              </div>


              <div className="inputContainer">
                <label htmlFor="username">Username: </label>
                <input
                  required 
                  type="text"
                  name="streetaddress"
                  id="streetaddress"
                  placeholder="enter address here"
                  onChange={handleChange}
                  value={user.streetaddress}
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="username">Username: </label>
                <input
                  required 
                  type="text"
                  name="phonenumber"
                  id="phonenumber"
                  placeholder="enter phone number here"
                  onChange={handleChange}
                  value={user.phonenumber}
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="username">Username: </label>
                <input
                  required 
                  type="text"
                  name="website"
                  id="website"
                  placeholder="enter website here"
                  onChange={handleChange}
                  value={user.website}
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="username">Username: </label>
                <input
                  required 
                  type="text"
                  name="myrating"
                  id="myrating"
                  placeholder="enter 1-5 here"
                  onChange={handleChange}
                  value={user.myrating}
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="username">Username: </label>
                <input
                  required 
                  type="text"
                  name="notes"
                  id="notes"
                  placeholder="notes"
                  onChange={handleChange}
                  value={user.notes}
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="username">Username: </label>
                <input
                  required 
                  type="text"
                  name="visited"
                  id="visited"
                  placeholder=""
                  onChange={handleChange}
                  value={user.visited}
                />
              </div>

                <button role="submit">Login</button>
            </form>
        <img src={table} alt="table with food" />
        </div>
      );
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
}
