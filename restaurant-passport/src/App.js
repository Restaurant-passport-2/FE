import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import RestaurantList from './components/RestaurantList';
import PrivateRoute from './components/PrivateRoute';
import Restaurant from './components/Restaurant';



function App() {
  return (
    <div className="App">
      <Router>
        <Route path = '/signup' component = {SignUp} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/restaurants' component={RestaurantList} />
        <PrivateRoute path='/restaurants/:restaurantId' component={Restaurant} />
      </Router>
      <Header />
      <Login />
      <Footer />
      
    </div>
  );
}

export default App;
