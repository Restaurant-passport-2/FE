import React from "react";
import {NavLink} from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <nav>
                <a href='https://restaurant-passport-team.netlify.com/index.html'>About</a>
                <a href='https://restaurant-passport-team.netlify.com/about.html'>About Us</a>
                <NavLink to=''>My Passport</NavLink>
            </nav>
            <p>Restaurant Passport copyright The Restaurant Passport Team</p>
       </div>
    );
}
