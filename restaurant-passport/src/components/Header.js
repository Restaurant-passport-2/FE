import React from "react";
import logo from '../images/logo.png';
import {NavLink } from 'react-router-dom';
import { connect } from "react-redux";

import { logoutUser } from '../actions/actions';

// <NavLink to='/signup' activeClassName='active'>Sign Up</NavLink>
//<NavLink to='/' activeClassName='active'>Sign Out</NavLink>
// <NavLink to='/' activeClassName='active'>Log In</NavLink>

function Header(props) {
    return (
        <header>
            <div className='img-container'>
                    <img src={logo} alt='logo' />
                </div>
            {props.name? <h1><span className='name'>{props.name}'s</span> Restaurant Passport</h1> : <h1>Restaurant Passport</h1>}
            <nav>
                <NavLink to='/restaurants' activeClassName='active'>My Passport</NavLink> 
                <NavLink to='/profile' activeClassName='active'>My Profile</NavLink>
            <button onClick={props.logoutUser}>Log Out</button>
            </nav>    
        </header>
    );
}

const mapStateToProps = state => {
    return {
        ...state,
    isLoggedIn: state.isLoggedIn,
    name: state.name
};
};

export default connect(
    mapStateToProps,
    { logoutUser }
  )(Header);