import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";


function App() {
  return (
    <div className="App">
      <Router>
        <Route path = '/signup' component = {SignUp} />

        
      </Router>
      <Header />
      <Login />
      <Footer />
      
    </div>
  );
}

export default App;
