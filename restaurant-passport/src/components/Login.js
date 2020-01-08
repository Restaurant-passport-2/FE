import React, { useState } from "react";

import { loginUser } from '../actions/actions';
import { connect } from "react-redux";
import SignUp from './SignUp';

function Login(props) {
  // console.log('login props', props)
  const [needsToSignUp, setNeedsToSignUp] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",  
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    props.loginUser(user, props.history);
  };

  const handleChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value })
  };

  const handleClick = () => {
    setNeedsToSignUp(!needsToSignUp);
    // props.history.push('/signup')
  }

  return (
    <div className='loginPage'>

      <div>
        <button onClick={handleClick}>{!needsToSignUp? 'First-Time User? Create Your Passport': 'Back to Login'}
        </button> 
        {needsToSignUp? <SignUp history={props.history} toggleSignUp={handleClick} /> : 
        <div>
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
            <button type="submit">Login</button>
        </form>
        </div>
    } 
    </div>
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
