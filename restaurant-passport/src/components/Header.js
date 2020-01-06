import React from "react";
import logo from '../images/logo.png';
import { Route, Router, Link } from 'react-router-dom';

import Login from "./Login";
import SignUp from "./SignUp";
import RestaurantList from './RestaurantList';

export default function Header(props) {
    return (
        <header>
            <div className='img-container'>
                    <img src={logo} alt='logo' />
                </div>
            <h1>Restaurant Passport</h1>
            <nav>
                <p>Sign Up</p>
                <p>Log In</p>
                <p>Sign Out</p>
                <p>My Passport</p>
            </nav>    
        </header>
    );
}

/*
<nav>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Log In</Link>
                <Link to='/login'>Sign Out</Link>
                <Link to='/restaurants'>My Passport</Link>   
                </nav>
*/