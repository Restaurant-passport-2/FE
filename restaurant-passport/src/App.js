import React , { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { connect } from "react-redux";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import RestaurantList from './components/RestaurantList';
import PrivateRoute from './components/PrivateRoute';
import Restaurant from './components/Restaurant';



function App(props) {
  const [needsToSignUp, setNeedsToSignUp] = useState(false);

  const handleClick = () => {
    setNeedsToSignUp(!needsToSignUp);
  }

  return (
    <div className="App">
      <Header />
      
      {props.isLoggedIn? null:
      <div>
        <button onClick={handleClick}>{!needsToSignUp? 'First-Time User? Create Your Passport': 'Back to Login'}
        </button> 
        {needsToSignUp? <SignUp /> : <Login />}
        </div>
      }
      
      
      
        <Route path = '/signup' component = {SignUp} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/restaurants' component={RestaurantList} />
        <PrivateRoute path='/restaurants/:restaurantId' component={Restaurant} />
     
      <Footer />
      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ...state,
    isLoggedIn: state.isLoggedIn
  }
};

export default connect(
  mapStateToProps,
  { }
)(App);
