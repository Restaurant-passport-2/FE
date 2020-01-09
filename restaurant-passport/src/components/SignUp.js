import React, { useEffect, useState} from "react";
import axios from 'axios';
import { signupUser } from '../actions/actions';
import { connect } from "react-redux";

function SignUp(props) {
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmpasssword: "",
    city: "",
    zipcode: "",
  });

  const handleSubmit = (event) => {


    event.preventDefault();
    console.log(newUser);
    /*axios.post("https://restaurant-passport-2.herokuapp.com/api/auth/signup", newUser)
        .then(response =>{

            console.log(response)
            localStorage.setItem('token', response.data.token);
        })
        .catch(err => {
            console.log(err)
        });
    */
    props.signupUser(newUser);
  };

  const handleChange = (event) => {
    setNewUser({...newUser, [event.target.name]: event.target.value })
  };

  var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirmpassword");


  //<img src={table2} alt="table with food" />
  return (
    <div className='signUpPage'>

      <h1>Create a Passport!</h1>

      <form onSubmit={handleSubmit}>
        <legend>Sign Up</legend>
        <div className="inputContainer">
          <label htmlFor="name">Name: </label>
          <input
            required 
            type="text"
            name="name"
            id="name"
            placeholder="enter your first and last names"
            onChange={handleChange}
            value={newUser.name}
          />
          </div>

        <div className="inputContainer">
          <label htmlFor="username">Username: </label>
          <input 
            required
            type="text"
            name="username"
            id="username"
            placeholder="enter your username"
            onChange={handleChange}
            value={newUser.username}
          />
          </div>
    
          <div className="inputContainer">
            <label htmlFor="email">Email: </label>
            <input 
              required
              type="text"
              name="email"
              id="email"
              placeholder="someone@example.com"
              onChange={handleChange}
              value={newUser.email}
            />
      
          </div>
    
          <div className="inputContainer">
            <label htmlFor="password">Password: </label>
            <input 
              required
              type="password"
              name="password"
              id="password"
              placeholder="enter your password"
              onChange={handleChange}
              value={newUser.password}
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="confirmpassword">Confirm Password: </label>
            <input 
              required
              confirmed
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              placeholder="enter your password"
              onChange={handleChange}
              value={newUser.confirmpassword}
            />
          </div>


          <div className="inputContainer">
            <label htmlFor='city'>City: </label>
            <input 
              type="text"
              name="city"
              id="city"
              placeholder="enter your city"
              onChange={handleChange}
              value={newUser.city}
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="zipcode">Zipcode: </label>
            <input 
              type="text"
              name="zipcode"
              id="zipcode"
              placeholder="enter your zipcode"
              onChange={handleChange}
              value={newUser.zipcode}
            />
          </div>
    
          <button role="submit">Sign Up and Get Your Passport!</button>
        </form>
      
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { signupUser }
)(SignUp);
  
