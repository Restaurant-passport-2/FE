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
            <h1>Restaurant Passport</h1>
            <nav>
                <NavLink to='/restaurants' activeClassName='active'>My Passport</NavLink> 
            {props.isLoggedIn && <button onClick={props.logoutUser}>Log Out</button>} 
            </nav>    
        </header>
    );
}

const mapStateToProps = state => {
    return {
        ...state,
    isLoggedIn: state.isLoggedIn
};
};

export default connect(
    mapStateToProps,
    { logoutUser }
  )(Header);