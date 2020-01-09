import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import { connect } from "react-redux";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import RestaurantList from './components/RestaurantList';
import PrivateRoute from './components/PrivateRoute';
import RestaurantPage from './components/RestaurantPage';
import Profile from './components/Profile';
import Recommendations from './components/Recommendations';



function App(props) {
  // const [needsToSignUp, setNeedsToSignUp] = useState(false);

  // const handleClick = () => {
  //   setNeedsToSignUp(!needsToSignUp);
  //   // props.history.push('/signup')
  // }

  return (
    <div className="App">
      <Header />
      
      {/* {props.isLoggedIn? null:
      <div>
        <button onClick={handleClick}>{!needsToSignUp? 'First-Time User? Create Your Passport': 'Back to Login'}
        </button> 
        {needsToSignUp? <SignUp /> : <Login />}
        </div>
      } */}
      
      
      
      
        <Route exact path='/' component={Login}/>
        <Route path = '/signup' component = {SignUp} />
        {/* <Route path='/login' component={Login} /> */}
        <PrivateRoute exact path='/restaurants' component={RestaurantList} />
        <PrivateRoute exact path='/restaurants/:restaurantId' component={RestaurantPage} />
        <PrivateRoute exact path='/profile' component={Profile} />
        <PrivateRoute exact path='/recommendations' component={Recommendations} />
     
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
