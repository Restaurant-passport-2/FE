import React, { useEffect, useState} from "react";
import axios from 'axios';

export default function Login() {
  const [user, setUser] = React.useState({
    username: "",
    password: "",  
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
    setUser({...user, [event.target.name]: event.target.value })
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
