import React from "react";
import logo from '../images/logo.png';
import {NavLink } from 'react-router-dom';

// <NavLink to='/signup' activeClassName='active'>Sign Up</NavLink>

export default function Header(props) {
    return (
        <header>
            <div className='img-container'>
                    <img src={logo} alt='logo' />
                </div>
            <h1>Restaurant Passport</h1>
            <nav>
               
                <NavLink to='/' activeClassName='active'>Log In</NavLink>
                <NavLink to='/' activeClassName='active'>Sign Out</NavLink>
                <NavLink to='/restaurants' activeClassName='active'>My Passport</NavLink>   
            </nav>    
        </header>
    );
}
