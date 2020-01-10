import React from "react";
import logo from '../images/logo.png';
import {NavLink, Link } from 'react-router-dom';
import { connect } from "react-redux";

import { logoutUser } from '../actions/actions';

function Header(props) {
    return (
        <header>
            <Link to='/'>
                <div className='img-container'>
                        <img src={logo} alt='logo' />
                </div>
            </Link>

            {props.name? <h1><span className='name'>{props.name}'s</span> Restaurant Passport</h1> : <h1>Restaurant Passport</h1>}
            <nav>
                <NavLink to='/restaurants' activeClassName='active'>My Passport</NavLink> 
                <NavLink to='/profile' activeClassName='active'>My Profile</NavLink>
                <NavLink to='/recommendations' activeClassName='active'>My Recommendations</NavLink>
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