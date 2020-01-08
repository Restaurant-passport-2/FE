import React from "react";
import {NavLink} from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <nav>
                <a href='https://restaurant-passport-ui.netlify.com/'>About</a>
                <a href='https://restaurant-passport-ui.netlify.com/about.html'>About Us</a>
                <NavLink to='/restaurants'>My Passport</NavLink>
            </nav>
            <p>Restaurant Passport copyright The Restaurant Passport Team</p>
       </div>
    );
}
