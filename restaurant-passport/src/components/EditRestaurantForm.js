import React, { useState } from "react";

export default function EditRestaurantForm() {
    const [restaurantName, setRestaurantName] = useState({
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
        console.log(restaurantName);
        // TODO: put editRestaurant call in here
      };
    
      const handleEdit = (event) => {
        setRestaurantName({...restaurantName, [event.target.name]: event.target.value })
      };
    
      return (
        <div className="edit-restaurant-box">
          
          <form onSubmit={handleSubmit}>
              <legend>Edit Restaurant</legend>
              <div className="inputContainer">
                <label htmlFor="restaurantname">Restaurant Name: </label>
                <input
                  required 
                  type="text"
                  name="restaurantname"
                  id="restaurantname"
                  placeholder="enter restaurant name here"
                  onChange={handleEdit}
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
                  placeholder="enter zipcode here"
                  onChange={handleEdit}
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
                  onChange={handleEdit}
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
                  onChange={handleEdit}
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
                  onChange={handleEdit}
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
                  onChange={handleEdit}
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
                  onChange={handleEdit}
                  value={restaurantName.notes}
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="visited">Visited: </label>
                <input
                  required 
                  type="checkbox"
                  name="visited"
                  id="visited"
                  placeholder=""
                  onChange={handleEdit}
                  value={restaurantName.visited}
                />
              </div>

                <button type="submit">Submit Edit</button>
            </form>
       
        </div>
      );

}
