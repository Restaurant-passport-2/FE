import React from "react";
import logo from '../images/logo.png';
import {NavLink } from 'react-router-dom';


export default function Header(props) {
    return (
        <header>
            <div className='img-container'>
                    <img src={logo} alt='logo' />
                </div>
            <h1>Restaurant Passport</h1>
            <nav>
                <NavLink to='/signup' activeClass='active'>Sign Up</NavLink>
                <NavLink to='/login' activeClass='active'>Log In</NavLink>
                <NavLink to='/login' activeClass='active'>Sign Out</NavLink>
                <NavLink to='/restaurants' activeClass='active'>My Passport</NavLink>   
            </nav>    
        </header>
    );
}
