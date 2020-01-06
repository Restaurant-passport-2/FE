import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import RestaurantList from './components/RestaurantList';



function App() {
  return (
    <div className="App">
      <Router>
        <Route path = '/signup' component = {SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/restaurants' component={RestaurantList} />
        
      </Router>
      <Header />
      <Login />
      <Footer />
      
    </div>
  );
}

export default App;
