import React, { useEffect, useState} from "react";
import axios from 'axios';

import { loginUser } from '../actions/actions';
import { connect } from "react-redux";

function Login(props) {
  const [user, setUser] = React.useState({
    username: "",
    password: "",  
  });

  const handleSubmit = (event) => {
    event.preventDefault()
    /*
    axios.post("https://restaurant-passport-2.herokuapp.com/api/auth/login", user)
    .then(response =>{
        console.log(response)
      localStorage.setItem('token', response.data.token)
    })
    .catch(err => {
        console.log(err)
    });
    */
    console.log(user);
    props.loginUser(user);
  };

  const handleChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value })
  };

  return (
    <div className='loginPage'>
      <h1>Access Your Passport</h1>
      <form onSubmit={handleSubmit}>
          <legend>Log In</legend>
          <div className="inputContainer">
            <label htmlFor="username">Username: </label>
            <input
              required 
              type="text"
              name="username"
              id="username"
              placeholder="enter your username here"
              onChange={handleChange}
              value={user.username}
            />
          </div>
      
          <div className="inputContainer">
            <label htmlFor="password">Password: </label>
              <input
                required 
                type="password"
                name="password"
                id="password"
                placeholder="enter password here"
                onChange={handleChange}
                value={user.password}
              />
            </div>
            <button role="submit">Login</button>
        </form>
    
    </div>
  );
  }

  const mapStateToProps = state => {
    return state;
  };

  export default connect(
    mapStateToProps,
    { loginUser }
  )(Login);
